import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { AuthService } from '../../../core/services/auth.service';
import { Student } from '../students/models';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

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
    private activatedRoute: ActivatedRoute,
    private router: Router

  ) {
    this.authStudent$ = this._authService.authStudent$;
  }
  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        map((route) => route.snapshot.data)
      )
      .subscribe((data) => {
        if (data && data['title']) {
          this.currentTitle = data['title'];
        }
      });
  }

  toggleSideBar() {
    this.toggle.emit();
  }
}
