import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { AuthService } from '../../../core/services/auth.service';
import { Student } from '../students/models';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectPageTitle } from '../../../store/selectors/auth.selector';
import { setPageTitle } from '../../../store/actions/auth.actions';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.scss'
})
export class ToolBarComponent implements OnInit {
  @Output() toggle = new EventEmitter<void>();

  authStudent$: Observable<Student | null>;
  pageTitle$: Observable<string>;

  constructor(
    private _authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store
  ) {
    this.authStudent$ = this._authService.authStudent$;
    this.pageTitle$ = this.store.select(selectPageTitle);
  }

  public ngOnInit(): void {
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
          this.store.dispatch(setPageTitle({ title: data['title'] }));
        }
      });
  }

  toggleSideBar() {
    this.toggle.emit();
  }
}
