import { Component } from '@angular/core';
import { Course } from './models/course';
import { MatDialog } from '@angular/material/dialog';
import { CoursesService } from '../../../core/services/courses.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';

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
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
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

  onDelete(id: string) {
    if (confirm('Esta seguro?')) {
      this.isLoading = true;
      this._coursesService.deleteUserById(id).subscribe({
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
    console.log(course);
  }
}
