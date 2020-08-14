import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Dragao } from 'src/app/providers/models/dragao.model';
import { DragonService } from 'src/app/providers/services/dragon.service';
import { LoaderService } from 'src/app/shared/loader/loader.service';
import { SnackType, MessageType } from 'src/app/shared/feedback-body/feedback-body.model';

@Component({
  selector: 'app-dragon-form',
  templateUrl: './dragon-form.component.html',
  styleUrls: ['./dragon-form.component.scss']
})
export class DragonFormComponent implements OnInit {

  @ViewChild('powerForm', { static: true }) formulario: NgForm;

  obj: Dragao;
  edit: boolean = false;

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public service: DragonService,
    public cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.startForm();
    this.setFormActions();
  }

  private startForm() {
    this.obj = new Dragao();

    if (this.activatedRoute.snapshot.paramMap.get('id') !== null) {
      LoaderService.show();
      const id = this.activatedRoute.snapshot.paramMap.get('id');
      this.edit = true;

      this.service.getOne(parseInt(id)).subscribe(
        loadedObj => {
          LoaderService.hide();
          this.obj = loadedObj;
          setTimeout(() => { this.cd.detectChanges(); }, 100);
        });
    }
  }

  private setFormActions(): void {
    this.formulario.ngSubmit.subscribe(() => { this.updateOrCreate(); });
  }

  private getLocation() {
    const tree = this.router.parseUrl(this.router.url);

    return tree.root.children['primary'].segments.map(it => it.path).join('/');
  }

  private getParentPath(path?: string) {
    if (path) {
      return path.slice(0, Math.max(path.lastIndexOf('/'), 0));
    }
    return this.getLocation().slice(0, Math.max(this.getLocation().lastIndexOf('/'), 1));
  }

  public updateOrCreate() {
    if (!this.edit) {
      this.service.save(this.obj).subscribe(
        success => {
          this.obj = success;
          this.service.feedService.simpleFeed(SnackType.SUCCESS, MessageType.SAVE);
          this.afterSave();
        });
    } else {
      this.service.updateDragon(this.obj.id, this.obj).subscribe(
        success => {
          this.obj = success;
          this.service.feedService.simpleFeed(SnackType.SUCCESS, MessageType.UPDATE);
          this.afterSave();
        });
    }
  }

  public returnScreen() {
    if (this.edit) {
      this.router.navigate([this.getParentPath(this.getParentPath())]);
    } else {
      this.router.navigate([this.getParentPath()]);
    }
  }

  private afterSave() {
    setTimeout(() => this.returnScreen(), 300);
  }

}
