import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataService} from './data.service';
import Cookies from 'universal-cookie';
import Response from "../@constants/response";
import CookieC from "../@constants/cookie.c";
import {Store} from "@ngrx/store";

@Injectable({
  providedIn: 'root'
})
export class UsersService extends DataService {
  
  constructor(protected http: HttpClient, protected store: Store) {
    super(http, store);
  }
  
  signIn(userName: string, password: string) {
    return this.post<{ data, status, token }>('sign-in', {userName, password})
  }
  
  getStats() {
    return this.get<Response>('users/statistics')
  }
  
  update(data) {
    return this.patch<Response>('users', data)
  }
}
