import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../users/models';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.scss'
})
export class ToolBarComponent {
  @Output() toggle = new EventEmitter<void>();

  authUser$: Observable<User | null>;

  constructor(private authService: AuthService) {
    this.authUser$ = this.authService.authUser$;
  }
  toggleSideBar() {
    this.toggle.emit();
  }
}
