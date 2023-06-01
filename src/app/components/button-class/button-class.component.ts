import { Component } from '@angular/core';

@Component({
  selector: 'app-button-class',
  templateUrl: './button-class.component.html',
  styleUrls: ['./button-class.component.css'],
})
export class ButtonClassComponent {
  isBig = true;

  getSize()
  {
    return this.isBig ? '2rem' : '1rem'
  }
}
