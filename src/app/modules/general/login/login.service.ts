import { Injectable } from "@angular/core";
import {ServicesService} from "../../application/services.service"
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LoginService extends ServicesService {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  login(user, pass) {
    return this.get('login', {user, pass})
  }

  login2(user, code){
    return this.get('login2' + ('/'+ user + '/'+ code))
  }
}
