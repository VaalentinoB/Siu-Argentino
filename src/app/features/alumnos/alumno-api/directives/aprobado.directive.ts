import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appAprobado]',
  standalone: false
})
export class AprobadoDirective implements OnInit {
  @Input() appAprobado: boolean = false;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.el.nativeElement.style.fontSize = '20px';
    this.el.nativeElement.style.color = this.appAprobado ? 'green' : 'red';
  }
}