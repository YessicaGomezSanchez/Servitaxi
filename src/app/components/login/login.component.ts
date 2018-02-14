import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:string;
  pass:string;

  constructor(private _router: Router, private _loginService: LoginService) { }

  ngOnInit() {
  }

  login() {
    if (this._loginService.validateUser(this.user, this.pass)) {
      this._router.navigate(['main']);

    } else {  
      alert('you little piece of shit');
    }
  }

}
