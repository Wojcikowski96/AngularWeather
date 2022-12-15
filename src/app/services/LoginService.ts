import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';

@Injectable(
    {
      providedIn: 'root'
    }
  )
export class AppService {

  authenticated = false;


  constructor(private http: HttpClient) {
  }

  authenticate(credentials: { username: string; password: string; } | undefined, callback: (() => any) | undefined) {
    console.log("passing credentials:");
    console.log(credentials)

        const headers = new HttpHeaders(credentials ? {
            authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
        } : {});
        console.log(headers)

        this.http.get('http://localhost:8080/user', {headers: headers})
        
      //   .pipe(map(response => ({
      //     name: response.name,
      //     authenticated: response.authenticated
          
      // })))   
.subscribe(response => {
            console.log("naglowki");
            console.log(headers);
            if (response) {
                this.authenticated = true;
            } else {
                this.authenticated = false;
            }
            console.log("Wartość responsa")
            console.log(response)
            return callback && callback();
        });

    }

}