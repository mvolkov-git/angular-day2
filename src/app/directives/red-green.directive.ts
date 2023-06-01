import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appRedGreen]',
})
export class RedGreenDirective {
  @HostBinding('style.color')
  myColor = 'green';

  @HostBinding('class.gil')
  isGil = true;

  @HostListener('mouseover')
  private changeBackgroundColor() {
    this.isGil = false;
  }

  @HostListener('mouseout')
  private resetBackgroundColor() {
    this.isGil = true;
  }

  @Input()
  appRedGreen?: boolean;

  constructor(private el: ElementRef) {
    console.log('directive works');
    console.log(this.el);
  }

  ngOnInit() {
    if (this.appRedGreen) {
      // this.el.nativeElement.classlist.add('gil');
      this.el.nativeElement.style.border = '3px solid red';
    } else {
      this.el.nativeElement.style.border = '5px solid green';
    }

    //  setInterval(() => (this.isGil = !this.isGil), 1000);

    setTimeout(() => {
      this.myColor = 'blue';
    }, 3000);
  }
}
function Hostlistener(target: RedGreenDirective, propertyKey: 'appRedGreen'): void {
  throw new Error('Function not implemented.');
}

