import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../../core/services/auth.service';
import { Student } from '../students/models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.scss'
})
export class ToolBarComponent implements OnInit {
  protected currentTitle: string = '';

  @Output() toggle = new EventEmitter<void>();

  authStudent$: Observable<Student | null>;

  constructor(
    private _authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) {
    this.authStudent$ = this._authService.authStudent$;
  }
  ngOnInit(): void {
    const routeData = this.activatedRoute.snapshot.firstChild?.data;
    console.log(routeData);
    if (routeData && routeData['title']) {
      this.currentTitle = routeData['title'];
    }
  }

  toggleSideBar() {
    this.toggle.emit();
  }
}
