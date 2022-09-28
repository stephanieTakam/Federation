import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AboutService } from './about.service';
import { People } from './people';
// import '../login/login.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  people: People ;
 
  constructor(private loginComponent: LoginComponent, private route: ActivatedRoute,private aboutService: AboutService, private router: Router) { }
  
  // id = this.loginComponent.userId

  ngOnInit(): void {
    // this.getUser(this.id 
    //   )
  }

  // getUser(ids): void {
  //   this.aboutService.getPeople(ids)
  //       .subscribe(res => {
  //         console.log(res);
  //         this.people.id = res[`id`].toString()
  //         this.people.name = res['name'].toString()
  //         this.people.lastname = res['lastname'].tostring()
  //         this.people.dob = res['dob'].toString()
  //         this.people.education = res['education'].toString()
  //         this.people.ethnicity = res['ethnicity'].toString()
  //         this.people.gender = res['gender'].toString()
  //         this.people.marital_status = res['marital_status'].toString()
  //         this.people.profession = res['profession'].toString()
  //         this.people.email = res['email'].toString()
  //         console.log(this.people.email)
  //       })
  // }
}
