import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-errors-template',
  templateUrl: './errors-template.component.html',
  styleUrls: ['./errors-template.component.scss']
})
export class ErrorsTemplateComponent {
  @Input() validationErrors: any;
}
