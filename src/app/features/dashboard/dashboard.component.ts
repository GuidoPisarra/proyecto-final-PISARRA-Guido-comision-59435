import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  showFiller = false;
  drawerOpen = false;

  constructor(private router: Router) { }




  toggleDrawer() {
    this.drawerOpen = !this.drawerOpen;
  }

  onDrawerStateChange(isOpen: boolean) {
    this.drawerOpen = isOpen;
  }


  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['auth', 'login']);
  }
}
