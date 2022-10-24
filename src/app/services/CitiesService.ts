import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { City } from '../model/City'
@Injectable(
    {
      providedIn: 'root'
    }
  )
  export class CitiesService{
      constructor(private http:HttpClient){
  
      }
      getCities(){
          return this.http.get<City[]>('http://localhost:8080/cities') 
        }
      
  
  }