import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  minDate = new Date();
  maxDate = new Date(2021, 10, 26);

  dateFilter = (date: Date | null) => {
    const day = (date || new Date()).getDay();
    return !new Set([0, 6]).has(day);
  };
}
