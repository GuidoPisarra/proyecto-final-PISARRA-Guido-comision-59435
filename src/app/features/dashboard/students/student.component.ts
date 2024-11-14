import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../../../core/services/students.service';
import { Student } from './models';
import { StudentDialogComponent } from './student-dialog/student-dialog.component';
import { StudentDetailModalComponent } from './student-detail-modal/student-detail-modal.component';
import { AlertService } from '../../../core/services/alert.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss',
})
export class StudentComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'createdAt', 'actions'];
  dataSource: Student[] = [];
  isLoading = false;
  isAdmin = false;

  constructor(
    private matDialog: MatDialog,
    private _studentService: StudentsService,
    private _alertService: AlertService,
    private _authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,

  ) {
    this._authService.getUserRole().subscribe(role => {
      this.isAdmin = role === 'admin';
    });
  }

  ngOnInit(): void {
    this.loadStudents();
    this._alertService.subscribeToAlerts();

  }

  loadStudents(): void {
    this.isLoading = true;
    this._studentService.getStudents().subscribe({
      next: (students: Student[]) => {
        this.dataSource = students;
      },
      error: () => {
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  addStudent(student: Student): void {
    this.isLoading = true;
    student.role = 'user';
    this._studentService.addStudent(student).subscribe({
      next: (newStudent: Student) => {
        this.dataSource = [...this.dataSource, newStudent];
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
      text: '¿Estás seguro de eliminar este estudiante?',
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
        this._studentService.deleteStudentById(id).subscribe({
          next: (students: Student[]) => {
            this.dataSource = students;
          },
          error: () => {
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

  openModal(editingStudent?: Student): void {
    this.matDialog
      .open(StudentDialogComponent, {
        data: {
          editingStudent,
        },
      })
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (!!result) {
            if (editingStudent) {
              this.handleUpdate(editingStudent.id.toString(), result);
            } else {
              this.addStudent(result)
            }
          }
        },
      });
  }

  handleUpdate(id: string, update: Student): void {
    this.isLoading = true;
    this._studentService.updateStudentById(id, update).subscribe({
      next: (students: Student[]) => {
        this.dataSource = students;
      },
      error: (err: any) => {
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  protected viewDetails(student: Student): void {
    const dialogRef = this.matDialog.open(StudentDetailModalComponent, {
      width: '500px',
      data: student
    });
  }
}
