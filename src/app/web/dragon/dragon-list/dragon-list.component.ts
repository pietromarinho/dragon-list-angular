import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DragonService } from 'src/app/providers/services/dragon.service';
import { MatTableDataSource } from '@angular/material/table';
import { Dragao } from 'src/app/providers/models/dragao.model';

@Component({
  selector: 'app-dragon-list',
  templateUrl: './dragon-list.component.html',
  styleUrls: ['./dragon-list.component.scss']
})
export class DragonListComponent implements OnInit {

  dataSource: MatTableDataSource<Dragao>;

  constructor(
    private service: DragonService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getDragoes();
  }

  getDragoes() {
    this.dataSource = new MatTableDataSource([]);
    this.service.getAll().subscribe(
      success => {
        this.dataSource = new MatTableDataSource(success);
        console.log(success);
      }
    )
  }

}
