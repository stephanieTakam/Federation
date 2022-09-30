import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AboutService } from './about.service';
import { People } from './people';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  
  @ViewChild('htmlData') htmlData!: ElementRef;

  people: People ;
 
  constructor(private loginComponent: LoginComponent, private route: ActivatedRoute,private aboutService: AboutService, private router: Router) { }
  
  id = this.loginComponent.userId

  ngOnInit(): void {
    this.getUser(this.id 
      )
  }

  getUser(ids): void {
    this.aboutService.getPeople(ids)
        .subscribe(res => {
          console.log(res);
          this.people.id = res[`id`].toString()
          this.people.name = res['name'].toString()
          this.people.lastname = res['lastname'].tostring()
          this.people.dob = res['dob'].toString()
          this.people.education = res['education'].toString()
          this.people.ethnicity = res['ethnicity'].toString()
          this.people.gender = res['gender'].toString()
          this.people.marital_status = res['marital_status'].toString()
          this.people.profession = res['profession'].toString()
          this.people.email = res['email'].toString()
          console.log(this.people.email)
        })
  }

  public openPDF(): void {
    let DATA = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 210;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    })
  }
}
