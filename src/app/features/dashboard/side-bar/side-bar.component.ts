import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Observable } from 'rxjs';
import { Student } from '../students/models';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  @Input() isDrawerOpen = false;
  @Output() drawerStateChange = new EventEmitter<boolean>();

  authStudent$: Observable<Student | null>;
  isAdmin: boolean = false;
  constructor(
    private _authService: AuthService
  ) {
    this.authStudent$ = this._authService.authStudent$;
    this._authService.getUserRole().subscribe(role => {
      this.isAdmin = role === 'admin';
    });
  }

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
    this.drawerStateChange.emit(this.isDrawerOpen);
  }

  logout(): void {
    this._authService.logout();
  }
}
