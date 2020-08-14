import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-check-modal',
  templateUrl: './check-modal.component.html',
  styleUrls: ['./check-modal.component.css']
})
export class CheckModalComponent {

  constructor(@Optional() @Inject(MAT_DIALOG_DATA) public text: string) { }

}
