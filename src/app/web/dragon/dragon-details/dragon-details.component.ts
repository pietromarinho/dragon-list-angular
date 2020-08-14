import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Dragao } from 'src/app/providers/models/dragao.model';
import * as moment from 'moment';
import 'moment/locale/pt-br';

@Component({
  selector: 'app-dragon-details',
  templateUrl: './dragon-details.component.html',
  styleUrls: ['./dragon-details.component.scss']
})
export class DragonDetailsComponent implements OnInit {

  creationDate: string = '';

  constructor(@Optional() @Inject(MAT_DIALOG_DATA) public dragao: Dragao) { }

  ngOnInit(): void {
    this.creationDate = moment(this.dragao.createdAt).format('llll');
  }

}
