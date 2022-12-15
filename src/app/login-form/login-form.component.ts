import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/LoginService';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  credentials = {username: '', password: ''};

  constructor(private app: AppService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }
  login() {
    this.app.authenticate(this.credentials, () => {
        this.router.navigateByUrl('/');
    });
    return false;
  }

}
