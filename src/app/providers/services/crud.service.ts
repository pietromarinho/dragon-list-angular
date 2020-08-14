import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { FeedBackService } from './feedback.service';
import { RestService } from './rest.service';
import { SecurityService } from './security.service';


export class CrudService<T> extends RestService {

  baseURL = environment.apiUrl;

  constructor(
    public http: HttpClient,
    baseUrl: string,
    public feedService: FeedBackService,
    public security: SecurityService,
  ) {
    super(http, feedService, security);
    this.baseURL += baseUrl;
  }

  public getAll(): Observable<Array<T>> {
    return this.get(this.baseURL);
  }

  public getOne(id: number): Observable<T> {
    const getUrl: string = this.baseURL + id;
    return this.get(getUrl);
  }

  public save(data: T): Observable<T> {
    return this.post(this.baseURL, data);
  }

  public update(data: T): Observable<T> {
    return this.put(this.baseURL, data);
  }

  public remove(id: number, data?: any): Observable<any> {
    const deleteUrl: string = this.baseURL + (id ? id : '');
    return this.delete(deleteUrl, data);
  }
}
