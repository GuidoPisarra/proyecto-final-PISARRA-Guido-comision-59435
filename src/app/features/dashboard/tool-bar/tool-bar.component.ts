import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../../core/services/auth.service';
import { Student } from '../students/models';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.scss'
})
export class ToolBarComponent {
  @Output() toggle = new EventEmitter<void>();

  authStudent$: Observable<Student | null>;

  constructor(private _authService: AuthService) {
    this.authStudent$ = this._authService.authStudent$;
  }
  toggleSideBar() {
    this.toggle.emit();
  }
}
