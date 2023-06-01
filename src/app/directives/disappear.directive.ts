import { Directive, ElementRef,  Input } from '@angular/core';

@Directive({
  selector: '[appDisappear]'
})
export class DisappearDirective {
  @Input()
  appDisappear: number = 0;

  constructor(private el: ElementRef) {

  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  async ngOnInit() {

    if (this.appDisappear > 0) {
      await this.delay(this.appDisappear);
      this.el.nativeElement.style.visibility = 'hidden';
    }
    // else {
    //   this.el.nativeElement.style.visibility = 'visible'
    // }
  }

}
