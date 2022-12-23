import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';

@Injectable(
    {
      providedIn: 'root'
    }
  )
export class LoginService {





  constructor(private http: HttpClient) {
  }

  authenticate(credentials: { email: string; password: string; } | undefined) {
    console.log("passing credentials:");
    console.log(credentials)


        return this.http.post<any>('http://localhost:8080/authenticate', credentials);



    }

}