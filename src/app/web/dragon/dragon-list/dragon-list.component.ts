import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Dragao } from 'src/app/providers/models/dragao.model';
import { DragonService } from 'src/app/providers/services/dragon.service';
import { CheckModalComponent } from 'src/app/shared/check-modal/check-modal.component';
import { MessageType, SnackType } from 'src/app/shared/feedback-body/feedback-body.model';
import { DragonDetailsComponent } from '../dragon-details/dragon-details.component';

@Component({
  selector: 'app-dragon-list',
  templateUrl: './dragon-list.component.html',
  styleUrls: ['./dragon-list.component.scss']
})
export class DragonListComponent implements OnInit {

  dataSource: MatTableDataSource<Dragao>;
  displayedColumns: string[] = ['nome', 'tipo', 'acoes'];
  totalElements = 0;

  public isMobile = false;

  constructor(
    private service: DragonService,
    private router: Router,
    private dialog: MatDialog,
  ) {
    window.addEventListener('resize', () => {
      this.displayWindowResize();
    });
  }

  ngOnInit(): void {
    this.isMobile = window.innerWidth < 700;
    this.getDragoes();
  }

  public newRecord() {
    const url = this.getLocation();
    const formUrl = url + '/form';
    this.router.navigate([formUrl]);
  }

  public edit(obj: Dragao) {
    const url = this.getLocation();
    const formUrl = url + '/form';
    this.router.navigate([formUrl, (obj as any).id]);
  }

  public delete(obj: Dragao) {
    const dialogRef = this.dialog.open(CheckModalComponent, {
      width: '470px',
      data: 'Deletar item ?'
    });

    dialogRef.afterClosed().subscribe(
      (result: boolean) => {
        if (result) {
          this.service.remove((obj).id).subscribe(
            () => {
              const index: number = this.dataSource.data.findIndex(item => item.id === obj.id);
              this.dataSource.data.splice(index, 1);
              this.dataSource = new MatTableDataSource(this.dataSource.data);
              this.totalElements = this.dataSource.data.length;
              this.service.feedService.simpleFeed(SnackType.SUCCESS, MessageType.DELETE);
            }
          );
        }
      });
  }

  public showDetails(item: Dragao) {
    const screenWidth: number = window.innerWidth;
    this.dialog.open(DragonDetailsComponent, {
      width: screenWidth > 700 ? '800px' : screenWidth + 'px',
      data: item,
      id: 'id-dragon-details'
    });
  }

  private getLocation() {
    const tree = this.router.parseUrl(this.router.url);

    return tree.root.children['primary'].segments.map(it => it.path).join('/');
  }

  private getDragoes() {
    this.dataSource = new MatTableDataSource([]);
    this.service.getAll().subscribe(
      success => {
        this.dataSource = new MatTableDataSource(success);
        this.dataSource.data.sort((itemA, itemB) => (itemA.name.toLowerCase() < itemB.name.toLowerCase()) ? -1 : 1);
        this.totalElements = this.dataSource.data.length;
      }
    )
  }

  private displayWindowResize(): void {
    this.isMobile = window.innerWidth < 700;
  }
}
