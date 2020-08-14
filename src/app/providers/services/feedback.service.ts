import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorResponse, MessageType, SnackType } from '../../shared/feedback-body/feedback-body.model';
import { SnackBarLayoutComponent } from '../../shared/snack-bar-layout/snack-bar-layout.component';

@Injectable({
  providedIn: 'root'
})
export class FeedBackService {

  constructor(public snackBar: MatSnackBar) { }

  public throwError(error?: ErrorResponse): void {
    this.snackBar.openFromComponent(SnackBarLayoutComponent, {
      duration: this.defineDuration(error),
      verticalPosition: 'top',
      horizontalPosition: 'end',
      panelClass: SnackType.ERROR,
      data: { type: SnackType.ERROR, data: this.verifyError(error) }
    });
  }

  public simpleFeed(type: SnackType, data: MessageType | string) {
    this.snackBar.openFromComponent(SnackBarLayoutComponent, {
      duration: 5000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
      panelClass: type,
      data: { type: type, data: data }
    });
  }

  private unknownError(): any {
    return { message: 'Isso não devia acontecer!' };
  }

  private defineDuration(error?: ErrorResponse): number {
    return error && error.errors ? 0 : 4000;
  }

  private verifyError(error?: any): any {
    if (!error) {
      return { message: 'Erro com a conexão!' };
    } else if (!error.message) {
      return this.unknownError();
    } else {
      return error;
    }
  }
}
