import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import Cookie from "../@helpers/cookie";
import {Store} from "@ngrx/store";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(
    protected http: HttpClient,
    protected store: Store,
  ) {
  }
  
  baseUrl = 'http://localhost:5000/'
  //
  get<T>(url) {
    return this.http.get<T>(this.baseUrl + url, {
      headers: {
        'Authorization': this.token
      }
    }).pipe(
      catchError(this.errorHandler<T>())
    )
  }
  
  post<T>(url, object) {
    return this.http.post<T>(this.baseUrl + url, object, {
      headers: {
        'Authorization': this.token
      }
    }).pipe(
      catchError(this.errorHandler<T>())
    )
  }
  
  patch<T>(url, object) {
    return this.http.patch<T>(this.baseUrl + url, object, {
      headers: {
        'Authorization': this.token
      }
    }).pipe(
      catchError(this.errorHandler<T>())
    )
  }
  
  delete<T>(url) {
    return this.http.delete<T>(this.baseUrl + url, {
      headers: {
        'Authorization': this.token
      }
    }).pipe(
      map(data => {
        return data;
      }),
      catchError(this.errorHandler<T>())
    )
  }
  
  private errorHandler<T>():
    (err: any, caught: Observable<T>) => Observable<T> {
    return (err: Error): Observable<T> => {
      if (err['status'] === 401) {
        //code to execute in case of 401
      }
      return of(err as unknown as T);
    };
  }
  
  get token() {
    return 'Bearer ' + Cookie.token();
  }
}
