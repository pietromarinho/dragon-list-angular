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
  displayedColumns: string[] = ['nome', 'tipo', 'acoes'];
  totalElements = 10;

  public isMobile = false;

  constructor(
    private service: DragonService,
    private router: Router,
  ) {
    window.addEventListener('resize', () => {
      this.displayWindowResize();
    });
  }

  ngOnInit(): void {
    this.isMobile = window.innerWidth < 700;
    this.getDragoes();
  }

  getDragoes() {
    this.dataSource = new MatTableDataSource([]);
    this.service.getAll().subscribe(
      success => {
        this.dataSource = new MatTableDataSource(success);
        this.dataSource.data.sort((itemA, itemB) => (itemA.name.toLowerCase() < itemB.name.toLowerCase()) ? -1 : 1);
        console.log(success);
      }
    )
  }

  private displayWindowResize(): void {
    this.isMobile = window.innerWidth < 700;
  }
}
