import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogExampleComponent, {
      data: { name: 'Vishwas' },
    });

    dialogRef
      .afterClosed()
      .subscribe((result: boolean) => console.log(`Dialog result: ${result}`));
  }
}
