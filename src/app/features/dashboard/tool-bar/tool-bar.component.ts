import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.scss'
})
export class ToolBarComponent {
  @Output() toggle = new EventEmitter<void>();

  toggleSideBar() {
    this.toggle.emit();
  }
}
