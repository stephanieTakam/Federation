import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServicesService } from '../../application/services.service';

@Injectable({
  providedIn: 'root'
})
export class AboutService extends ServicesService{

  constructor(private httpClient: HttpClient) {
    super(httpClient)
  }

  getPeople(id) {
    console.log("je suis la")
    return this.get('people' + ('/' + id))
  }
}
