import {Injectable} from '@angular/core';
import {environment} from '../../../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService<T> {

  private readonly apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  public setUrl(partial: string): string {
    return `${this.apiUrl}/${partial}`;
  }

  public setHeaders(headers: {}): HttpHeaders {
    return new HttpHeaders(headers);
  }

  public _get(url: string, headers?: HttpHeaders): Observable<T> {
    return this.httpClient.get<T>(url, {headers});
  }

  public _put(url: string, item: T, headers?: HttpHeaders): Observable<T> {
    return this.httpClient.put<T>(url, item, {headers});
  }

  public _post(url: string, item: T, headers?: HttpHeaders): Observable<T> {
    return this.httpClient.post<T>(url, item, {headers});
  }

  public _delete(url: string): Observable<T | undefined> {
    return this.httpClient.delete<T>(url);
  }
}
