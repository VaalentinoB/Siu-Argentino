import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appAprobado]'
})
export class AprobadoDirective implements OnInit {
  @Input() appAprobado: boolean = false;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.style.color = this.appAprobado ? 'green' : 'red';
    this.el.nativeElement.style.fontSize = '20px';
  }
}