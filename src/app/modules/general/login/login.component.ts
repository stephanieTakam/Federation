import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import CookieS from '../../../cookie.s';
import {LoginService} from "./login.service";

declare var window: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  formModal: any;

  erreur: string;
  userId: string;

  constructor(private loginService:LoginService, private router: Router) {}

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('mymodal'),
    )
  }

  openFormModal(){
    this.formModal.show();
    this.erreur = ""
  }

  login(user, pass) {
    this.loginService.login(user, pass).subscribe(
      {
        next: res => {
          console.log(res)
          this.openFormModal()
        if(res){
          CookieS.setUser({user, pass})
        }
      },
      error: () => {
        CookieS.remove()
        this.erreur = "Username or password incorrect"
        user = user
        pass = pass
      }})
  }

  login2(user, code) {
    console.log(user, code)   
    this.loginService.login2(user, code).subscribe({
      next: res => {
        console.log(code)
        this.userId = user
        this.router.navigate(['/people']);
        this.formModal.hide();  
      },
      error: () => {
        CookieS.remove()
        this.erreur = "Code incorrect"
        this.router.navigate(['/'],{state: {erreur: this.erreur}})
      }})
  }

}
