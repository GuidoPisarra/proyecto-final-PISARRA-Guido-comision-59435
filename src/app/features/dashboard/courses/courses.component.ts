import { Component } from '@angular/core';
import { Course } from './models/course';
import { MatDialog } from '@angular/material/dialog';
import { CoursesService } from '../../../core/services/courses.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { CourseDetailsModalComponent } from './course-details-modal/course-details-modal.component';
import { AlertService } from '../../../core/services/alert.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  displayedColumns: string[] = ['profesor', 'commitee', 'course', 'createdAt', 'startDate', 'endDate', 'actions'];
  dataSource: Course[] = [];
  isLoading = false;

  constructor(
    private _coursesService: CoursesService,
    private _alertService: AlertService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.isLoading = true;
    this._coursesService.getCourses().subscribe({
      next: (courses: Course[]) => {
        this.dataSource = courses;
      },
      error: () => {
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  addCourse(course: Course): void {
    this.isLoading = true;
    console.log(course);
    this._coursesService.addCourse(course).subscribe({
      next: (newCourse: Course) => {
        this.dataSource = [...this.dataSource, newCourse];
      },
      error: () => {
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  onDelete(id: string) {
    this._alertService.showAlert({
      title: '¡Advertencia!',
      text: '¿Estás seguro de eliminar este curso?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
      customClass: {
        confirmButton: 'swal2-confirm-btn',
        cancelButton: 'swal2-cancel-btn',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.isLoading = true;
        this._coursesService.deleteCourseById(id).subscribe({
          next: (courses: Course[]) => {
            this.dataSource = courses;
          },
          error: (err: any) => {
            this.isLoading = false;
          },
          complete: () => {
            this.isLoading = false;
          },
        });
      }
    });
  }

  goToDetail(id: string): void {
    this.router.navigate([id, 'detail'], {
      relativeTo: this.activatedRoute,
    });
  }

  openModal(editingCourse?: Course): void {
    this.matDialog
      .open(CourseDialogComponent, {
        data: {
          editingCourse,
        },
      })
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (!!result) {
            if (editingCourse) {
              this.handleUpdate(editingCourse.id.toString(), result);
            } else {
              this.dataSource = [...this.dataSource, result];
              this.addCourse(result)
            }
          }
        },
      });
  }

  handleUpdate(id: string, update: Course): void {
    this.isLoading = true;
    this._coursesService.updateCourseById(id, update).subscribe({
      next: (courses: Course[]) => {
        this.dataSource = courses;
      },
      error: (err: any) => {
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  protected viewDetails(course: Course): void {
    const dialogRef = this.matDialog.open(CourseDetailsModalComponent, {
      width: '500px',
      data: course
    });
  }
}
