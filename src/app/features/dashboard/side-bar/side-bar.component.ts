import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Observable } from 'rxjs';
import { User } from '../users/models';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  @Input() isDrawerOpen = false;
  @Output() drawerStateChange = new EventEmitter<boolean>();
  showFiller = false;

  authUser$: Observable<User | null>;

  constructor(
    private _authService: AuthService,
  ) {
    this.authUser$ = this._authService.authUser$;

  }

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
    this.drawerStateChange.emit(this.isDrawerOpen);
  }

  logout(): void {
    this._authService.logout();
  }
}
