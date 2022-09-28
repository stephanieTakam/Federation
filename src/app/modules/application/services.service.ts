import { Injectable } from '@angular/core';
// @ts-ignore
import { HttpClient, HttpHeaders } from '@angular/common/http';
import CookieS from "../../cookie.s";



@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  headers(user, pass) {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa(user + ':' + pass)
    })
  }
  
  baseUrl = 'http://172.16.145.184:5001/'

  constructor(private http : HttpClient) {}

  get(url: string, config:{user:String, pass:String} = {
    user: "" || CookieS.user.user,
    pass: "" || CookieS.user.pass
  }) {
    console.log(config)
    return this.http.get(this.baseUrl + url, {
      headers: this.headers(config.user, config.pass)
    }).pipe()
  }

}
