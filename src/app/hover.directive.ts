import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core'

@Directive({
  selector: '[appHover]',
})
export class hoverDirective implements OnInit {
  @Input() defaultColor: string

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if (this.defaultColor) {
      this.setBgColor(this.defaultColor)
    } else {
      this.setBgColor('white')
    }
  }

  setBgColor(color: string) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'backgroundColor',
      color
    )
  }
}