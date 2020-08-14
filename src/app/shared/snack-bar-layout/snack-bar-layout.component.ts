import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
import { SnackBody, SnackType } from '../feedback-body/feedback-body.model'

@Component({
  selector: 'app-snack-bar-layout',
  templateUrl: './snack-bar-layout.component.html',
  styleUrls: ['./snack-bar-layout.component.css']
})
export class SnackBarLayoutComponent {

  constructor(
    public snackBarRef: MatSnackBarRef<SnackBarLayoutComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: SnackBody
  ) { }

  public isFine(): boolean {
    return this.data.type === SnackType.SUCCESS || this.data.type === SnackType.INFO;
  }

  public isError(): boolean {
    return this.data.type === SnackType.ERROR;
  }

  public close(): void {
    this.snackBarRef.dismiss();
  }

}
