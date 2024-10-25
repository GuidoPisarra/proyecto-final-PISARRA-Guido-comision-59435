import { Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-errors-template',
  templateUrl: './errors-template.component.html',
})
export class ErrorsTemplateComponent {
  @Input() validationErrors: ValidationErrors | null | undefined = null;


}
