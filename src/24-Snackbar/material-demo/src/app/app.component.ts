import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomSnackBarComponent } from './custom-snack-bar/custom-snack-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string | undefined) {
    const snackBarRef = this.snackBar.open(message, action, { duration: 2000 });

    snackBarRef
      .afterDismissed()
      .subscribe(() => console.log('The snackbar was dismissed'));

    snackBarRef
      .onAction()
      .subscribe(() => console.log('The snackbar action was trigged'));
  }

  openCustomSnackBar() {
    this.snackBar.openFromComponent(CustomSnackBarComponent, {
      duration: 2000,
    });
  }
}
