import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/LoginService';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  credentials = {email: '', password: ''};

  token: any

  constructor(private loginService: LoginService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }
  login() {
    this.loginService.authenticate(this.credentials).subscribe(token => {this.token = token.text
    alert(this.token.text)
    
    })
    };

  }


