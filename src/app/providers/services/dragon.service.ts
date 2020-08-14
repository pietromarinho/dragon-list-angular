import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ENDPOINTS } from '../../constants';
import { Dragao } from '../models/dragao.model';
import { CrudService } from './crud.service';
import { FeedBackService } from './feedback.service';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class DragonService extends CrudService<Dragao> {

  private dragoesUrl = environment.apiUrl + ENDPOINTS.DRAGOES;


  constructor(http: HttpClient, feedService: FeedBackService, security: SecurityService) {
    super(http, ENDPOINTS.DRAGOES, feedService, security);
  }
}
