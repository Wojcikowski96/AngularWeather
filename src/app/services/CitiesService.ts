import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { catchError, throwError } from 'rxjs'
import { City } from '../model/City'
import { Router } from '@angular/router'
@Injectable(
    {
      providedIn: 'root'
    }
  )
  export class CitiesService{
    token:any
      constructor(private http:HttpClient, public router: Router){
  
      }
      getCities(){
          return this.http.get<City[]>('http://localhost:8080/cities').pipe(
            catchError((err) => {
              console.log('error caught in service')
              console.error(err);
              if(err instanceof ErrorEvent){
                console.error("Non status code error")
              }else{
                switch(err.status){
                  case 403:
                    console.log("przekierowuje na formatkę logowania")
                    this.router.navigateByUrl("/login")
                }
              }
                
              //Handle the error here
     
              return throwError(err);    //Rethrow it back to component
            })
          )
          
        }

      setToken(token: any){
        this.token = token
      }
      
  
  }