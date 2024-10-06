import { Directive, ElementRef } from '@angular/core';

const SIZE = '20px'
@Directive({
  selector: '[appTitleFontSize]'
})
export class TitleFontSizeDirective {
  constructor(
    private el: ElementRef<HTMLElement>
  ) {
    this.applyStyles();
  }

  applyStyles(): void {
    this.el.nativeElement.style.fontSize = SIZE;
  }
}
