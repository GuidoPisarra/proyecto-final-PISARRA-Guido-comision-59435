import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { User } from '../../../core/models';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'createdAt', 'actions'];
  dataSource: User[] = [];

  constructor(
    private matDialog: MatDialog,
    private http: HttpClient,
    private _userService: UserService
  ) { }

  ngOnInit(): void {
    this._userService.getUsers().subscribe({
      next: (usuarios) => this.dataSource = usuarios,
      complete: () => console.log('El observable se completo!'),
    });

  }

  onDelete(id: number): void {
    this.dataSource = this.dataSource.filter((user: User) => user.id !== id);
  }

  openModal(editingUser?: User): void {
    this.matDialog
      .open(UserDialogComponent, {
        data: {
          editingUser,
        },
      })
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (!!result) {
            if (editingUser) {
              this.dataSource = this.dataSource.map((user: User) =>
                user.id === editingUser.id ? { ...user, ...result } : user
              );
            } else {
              this.dataSource = [...this.dataSource, result];
            }
          }
        },
      });
  }
}
