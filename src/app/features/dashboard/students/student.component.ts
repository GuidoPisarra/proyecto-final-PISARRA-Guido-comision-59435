import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Student } from './models';
import { StudentDialogComponent } from './student-dialog/student-dialog.component';
import { StudentDetailModalComponent } from './student-detail-modal/student-detail-modal.component';
import { AlertService } from '../../../core/services/alert.service';
import { AuthService } from '../../../core/services/auth.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectIsLoadingStudents, selectStudents } from './store/students.selector';
import { StudentsActions } from './store/students.actions';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss',
})
export class StudentComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'createdAt', 'actions'];
  dataSource$: Observable<Student[]>;
  isLoading$: Observable<boolean>;
  isAdmin = false;

  constructor(
    private store: Store,
    private matDialog: MatDialog,
    private _alertService: AlertService,
    private _authService: AuthService
  ) {
    this._authService.getUserRole().subscribe((role) => {
      this.isAdmin = role === 'admin';
    });

    this.dataSource$ = this.store.select(selectStudents);
    this.isLoading$ = this.store.select(selectIsLoadingStudents);
  }

  ngOnInit(): void {
    this.store.dispatch(StudentsActions.loadStudents());
  }

  addStudent(student: Student): void {
    this.store.dispatch(StudentsActions.createStudents({ student }));
  }

  onDelete(studentId: string): void {
    this._alertService
      .showAlert({
        title: '¡Advertencia!',
        text: '¿Estás seguro de eliminar al alumno?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar',
        customClass: {
          confirmButton: 'swal2-confirm-btn',
          cancelButton: 'swal2-cancel-btn',
        },
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.store.dispatch(StudentsActions.deleteStudents({ studentId }));
        }
      });
  }

  openModal(editingStudent?: Student): void {
    this.matDialog
      .open(StudentDialogComponent, { data: { editingStudent } })
      .afterClosed()
      .subscribe((result) => {
        if (!!result) {
          if (editingStudent) {
            this.handleUpdate(editingStudent.id, result);
          } else {
            this.addStudent(result);
          }
        }
      });
  }

  handleUpdate(studentId: number, update: Student): void {
    this.store.dispatch(StudentsActions.updateStudents({ student: { ...update, id: studentId } }));
  }

  viewDetails(student: Student): void {
    this.matDialog.open(StudentDetailModalComponent, {
      width: '500px',
      data: student,
    });
  }
}
