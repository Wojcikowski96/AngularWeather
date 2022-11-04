import {HttpClient, HttpParams} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Weather } from '../model/Weather'
@Injectable(
    {
      providedIn: 'root'
    }
  )
  export class WeatherService{
      constructor(private http:HttpClient){
  
      }
      getAllWeather(): Observable<any>{
          return this.http.get('http://localhost:8080/forecast?cityID=1&cityID=2&cityID=3&cityID=4&cityID=5&cityID=6&cityID=7&cityID=8&cityID=9&cityID=10') 
        }
      
      getWeatherForLocation(identity:number): Observable<any>{
          console.log('http://localhost:8080/forecast?cityID='+identity+"&correlationId=angular")
          return this.http.get('http://localhost:8080/forecast?cityID='+identity+"&correlationId=angular") 
        }
  
        // getWeatherForMultipleLocations(identities:number[]): Observable<any>{
        //   let params = new HttpParams();
        //   params = params.appendAll({'cityID': identities})
        //   console.log(params.toString())
        //   console.log('http://localhost:8080/forecast' + params.toString())
        //     return this.http.get<Weather>('http://localhost:8081/forecast?' + params.toString()) 
        //   }
  
  }