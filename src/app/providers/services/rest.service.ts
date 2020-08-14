import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ErrorResponse, SnackType } from 'src/app/shared/feedback-body/feedback-body.model';
import { FeedBackService } from './feedback.service';
import { SecurityService } from './security.service';

export class RestService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    public http: HttpClient,
    public feedService: FeedBackService,
    public security: SecurityService
  ) { }

  get(url: string, data?: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), params: data
    };

    return this.http.get<any>(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleErrorObservable.bind(this))
    );
  }

  post(url: string, data: any): Observable<any> {
    return this.http.post<any>(url, data, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleErrorObservable.bind(this))
    );
  }

  put(url: string, data: any): Observable<any> {
    return this.http.put<any>(url, data, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleErrorObservable.bind(this))
    );
  }
  patch(url: string, data: any): Observable<any> {
    return this.http.patch(url, data).pipe(
      map(this.extractData),
      catchError(this.handleErrorObservable.bind(this))
    );

  }

  delete(url: string, data?: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: data
    };

    return this.http.delete<any>(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleErrorObservable.bind(this))
    );
  }

  public handleErrorObservable(error: HttpErrorResponse): Observable<never> {
    if (error.status === 401 || error.status === 403) {
      const customError = new ErrorResponse();
      customError.message = 'Acesso negado!';
      this.feedService.throwError(customError);
      this.security.logout();
    } else if (error.status === 0) {
      this.feedService.simpleFeed(SnackType.WARNING, 'Erro com a conexão :(');
    } else {
      this.feedService.throwError(error.error);
    }

    return throwError(error);
  }

  public extractData(res: any) {
    try {
      const body = res.json();
      return body;
    } catch (error) {
      return res;
    }
  }
}
