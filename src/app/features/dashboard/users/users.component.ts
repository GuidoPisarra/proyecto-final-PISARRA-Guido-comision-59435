import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { User } from './models';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'createdAt', 'actions'];
  dataSource: User[] = [];
  isLoading = false;

  constructor(
    private matDialog: MatDialog,
    private usersService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.isLoading = true;
    this.usersService.getUsers().subscribe({
      next: (users: User[]) => {
        this.dataSource = users;
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
      // this.dataSource = this.dataSource.filter((user) => user.id !== id);
      this.isLoading = true;
      this.usersService.removeUserById(id).subscribe({
        next: (users: User[]) => {
          this.dataSource = users;
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
              this.handleUpdate(editingUser.id.toString(), result);
            } else {
              this.dataSource = [...this.dataSource, result];
            }
          }
        },
      });
  }

  handleUpdate(id: string, update: User): void {
    this.isLoading = true;
    this.usersService.updateUserById(id, update).subscribe({
      next: (users: User[]) => {
        this.dataSource = users;
      },
      error: (err: any) => {
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  protected viewDetails(user: User): void {
    console.log(user);
  }
}
