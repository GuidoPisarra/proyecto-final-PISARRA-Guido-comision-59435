import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertService } from '../../../core/services/alert.service';
import { Student } from '../students/models';
import { StudentDetailModalComponent } from '../students/student-detail-modal/student-detail-modal.component';
import { UsersDialogComponent } from './users-dialog/users-dialog.component';
import { AuthService } from '../../../core/services/auth.service';
import { Store } from '@ngrx/store';
import { UsersActions } from './store/users.actions';
import { Observable } from 'rxjs';
import { User } from './models';
import { selectUsers } from './store/users.selector';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  displayedColumns: string[] = ['name', 'email', 'createdAt', 'actions'];
  isLoading = false;
  isAdmin = false;
  dataSource$: Observable<User[]>;

  constructor(
    private matDialog: MatDialog,
    private _alertService: AlertService,
    private _authService: AuthService,
    private store: Store
  ) {
    this.dataSource$ = this.store.select(selectUsers);
    this._authService.getUserRole().subscribe(role => {
      this.isAdmin = role === 'admin';
    });
  }

  ngOnInit(): void {
    this.store.dispatch(UsersActions.loadUsers());
    this._alertService.subscribeToAlerts();
  }

  addUser(user: User): void {
    this.store.dispatch(UsersActions.createUsers({ user }));
  }

  onDelete(id: string) {
    this._alertService.showAlert({
      title: '¡Advertencia!',
      text: '¿Estás seguro de eliminar este usuario?',
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
        this.store.dispatch(UsersActions.deleteUsers({ userId: id }));
      }
    });
  }

  openModal(editingUser?: User): void {
    this.matDialog
      .open(UsersDialogComponent, { data: { editingUser } })
      .afterClosed()
      .subscribe((result) => {
        if (!!result) {
          if (editingUser) {
            this.handleUpdate(result);
          } else {
            this.addUser(result);
          }
        }
      });
  }

  handleUpdate(update: User): void {
    this.store.dispatch(UsersActions.updateUsers({ user: { ...update } }));

  }

  protected viewDetails(student: Student): void {
    const dialogRef = this.matDialog.open(StudentDetailModalComponent, {
      width: '500px',
      data: student
    });
  }
}
