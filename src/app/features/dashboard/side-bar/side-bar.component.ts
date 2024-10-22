import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  @Input() isDrawerOpen = false;
  @Output() drawerStateChange = new EventEmitter<boolean>();

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
    this.drawerStateChange.emit(this.isDrawerOpen); 
  }
}
