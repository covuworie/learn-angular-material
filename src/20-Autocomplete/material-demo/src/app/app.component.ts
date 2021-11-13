import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  options = ['Angular', 'React', 'Vue'];
  objectOptions = [
    { name: 'Angular' },
    { name: 'Angular Material' },
    { name: 'React' },
    { name: 'Vue' },
  ];
  control = new FormControl();
  filteredOptions: Observable<string[]> = of([]);

  displayName(subject: { name: string } | undefined) {
    return subject ? subject.name : '';
  }

  ngOnInit() {
    this.filteredOptions = this.control.valueChanges.pipe(
      startWith(''),
      map((value: string) =>
        this.options.filter((option) =>
          option.toLowerCase().includes(value.toLowerCase())
        )
      )
    );
  }
}
