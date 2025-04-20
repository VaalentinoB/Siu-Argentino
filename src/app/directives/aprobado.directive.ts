import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAprobado]',
  standalone: false
})
export class AprobadoDirective {
  @Input() set appAprobado(isAprobado: boolean) {
    
    if (isAprobado) {
      this.renderer.setStyle(this.el.nativeElement, 'color', 'green');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}
}
