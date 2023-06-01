import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  toDay = new Date();
  dateFormat = 'dd/MM/yyyy';

  title = 'day2';
  btnWidth = '100px';
  btnHeight = '50px';
  weekdays: string[] = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'];

  names = ['Gil', 'Moshe', 'Yossi', 'Leah'];

  people = [
    { name: 'Gil', age: 24 },
    { name: 'Moshe', age: 19 },
    { name: 'Yossi', age: 35 },
    { name: 'Leah', age: 47 },
  ];

  constructor() {
    // setInterval(() => this.names.push('temp'), 2000);
  }

  print(name: string) {
    return 'my name is ' + name;
  }

  hebDayIOfWeek(): string {
    return 'dd/MM/yyyy יום ' + this.weekdays[this.toDay.getDay()];
  }
}
