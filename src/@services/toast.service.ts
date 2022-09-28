import {Component, Inject, Injectable} from "@angular/core";
import {MAT_SNACK_BAR_DATA, MatSnackBar, MatSnackBarRef} from "@angular/material/snack-bar";

import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class ToastService extends MessageService {

  constructor(private snackBarRef: MatSnackBar) {
    super();
  }

  public show(data) {
    this.snackBarRef.openFromComponent(SnackbarComponent, {data, duration: 3000})
  }
}

@Component({
  selector: 'my-app',
  template: `
    <div class="flex h-full px-3 rounded items-center text-white"
         style="font-weight: 500"
         [class.warning]="data.severity==='warning'"
         [class.success]="data.severity==='success'"
         [class.error]="data.severity==='error'"
    >
      <div class="flex-1">{{data.message}} !</div>
      <div>
        <button mat-icon-button (click)="snackBarRef.dismiss()" mat-ripple>
          <mat-icon svgIcon="close" class="mb-1"
                    style="font-size: 20px; width: 20px; height: 20px; line-height: 20px"></mat-icon>
        </button>
      </div>
    </div>`,
  styles: []
})
export class SnackbarComponent {
  constructor(
    public snackBarRef: MatSnackBarRef<SnackbarComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) {
  }

}
