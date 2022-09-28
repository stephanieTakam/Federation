import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  constructor(private swUpdate: SwUpdate, private snackbar: MatSnackBar) {
    this.swUpdate.available.subscribe(evt => {
      const snack = this.snackbar.open('Nouvelle mise à jour', 'Mettre à Jour');

      snack
          .onAction()
          .subscribe(() => {
            window.location.reload();
          });

      setTimeout(() => {
        snack.dismiss();
      }, 30000);
    });
  }
}
