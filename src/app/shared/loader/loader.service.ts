import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  public static isLoading = new Subject<boolean>();

  public static show() {
    this.isLoading.next(true);
  }

  public static hide() {
    this.isLoading.next(false);
  }
}
