import { Directive, ElementRef, Renderer2, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: 'img[rotate]'
})
export class RotateDirective implements OnInit {
  @Input() rotate: string | undefined;
  @Input() step: string | undefined;
  private defaultStep = 10;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const initialRotation = this.rotate ? parseFloat(this.rotate) : 0;
    const initialStep = this.step ? parseFloat(this.step) : this.defaultStep;
    this.applyRotation(initialRotation);
    this.step = initialStep.toString(); 
  }

  @HostListener('click', ['$event.shiftKey'])
  onClick(shiftKey: boolean) {
    const currentRotation = this.rotate ? parseFloat(this.rotate) : 0;
    const currentStep = this.step ? parseFloat(this.step) : this.defaultStep;
    const rotationStep = shiftKey ? -currentStep : currentStep;
    const newRotation = currentRotation + rotationStep;
    this.rotate = newRotation.toString();
    this.applyRotation(newRotation);
  }

  private applyRotation(angle: number) {
    this.renderer.setStyle(this.el.nativeElement, 'transform', `rotate(${angle}deg)`);
  }
}
