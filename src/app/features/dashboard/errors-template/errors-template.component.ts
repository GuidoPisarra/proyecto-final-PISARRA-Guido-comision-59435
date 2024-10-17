import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-errors-template',
  templateUrl: './errors-template.component.html',
})
export class ErrorsTemplateComponent implements OnInit {
  @Input() validationErrors: any;

  ngOnInit(): void {
    console.log('validationErrors:', this.validationErrors);
  }
}
