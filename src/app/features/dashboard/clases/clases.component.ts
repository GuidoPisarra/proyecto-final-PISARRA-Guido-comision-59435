import { Component } from '@angular/core';
import { CoursesService } from '../../../core/services/courses.service';
import { ClasesService } from '../../../core/services/clases.service';
import { Course } from '../courses/models/course';
import { Clase } from './models/clase';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ClaseDialogComponent } from './clase-dialog/clase-dialog.component';


@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrl: './clases.component.scss'
})
export class ClasesComponent {
  selectedValue: string = '';
  listOfCourses: Course[] = [];
  listOfClases: Clase[] = [];
  isLoading = true;
  displayedColumns: string[] = ['title', 'date', 'duration', 'actions'];


  constructor(
    private _coursesService: CoursesService,
    private _clasesService: ClasesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private matDialog: MatDialog
  ) {
    this._coursesService.getCourses().subscribe({
      next: (courses: Course[]) => {
        this.listOfCourses = courses;
      },
      error: () => {
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  onDelete(id: number) {
    if (confirm('Esta seguro?')) {
      this.isLoading = true;
      this._clasesService.deleteClassById(id).subscribe({
        next: (clases: Clase[]) => {
          this.listOfClases = clases;
        },
        error: (err: any) => {
          this.isLoading = false;
        },
        complete: () => {
          this.isLoading = false;
        },
      });
    }
  }

  goToDetail(id: string): void {
    this.router.navigate([id, 'detail'], {
      relativeTo: this.activatedRoute,
    });
  }

  openModal(editingClase?: Clase): void {
    this.matDialog
      .open(ClaseDialogComponent, {
        data: {
          editingClase,
        },
      })
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (!!result) {
            if (editingClase) {
              this.handleUpdate(editingClase.classId.toString(), result);
            } else {
              this.listOfClases = [...this.listOfClases, result];
            }
          }
        },
      });
  }

  handleUpdate(id: string, update: Clase): void {
    this.isLoading = true;
    this._clasesService.updateClaseById(id, update).subscribe({
      next: (clases: Clase[]) => {
        this.listOfClases = clases;
      },
      error: (err: any) => {
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  onCourseChange(event: any) {
    const courseId = event.value;
    this.selectedValue = courseId;
    this._clasesService.getClasesById(courseId).subscribe({
      next: (filteredClases: Clase[]) => {
        this.listOfClases = filteredClases;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error al obtener clases:', err);
        this.isLoading = false;
      }
    });
  }
  protected viewDetails(course: Course): void {
    console.log(course);
  }

}
