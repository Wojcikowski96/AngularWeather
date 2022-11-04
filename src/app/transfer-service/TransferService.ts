import { Injectable } from '@angular/core';
import { City } from '../model/City';
import { BehaviorSubject } from 'rxjs';

@Injectable(    
    {
    providedIn: 'root'
    }
  )
export class TransfereService {
  private city$ = new BehaviorSubject<any>({});
  selectedCity$ = this.city$.asObservable();
  
  constructor(


  ) { }

 
 

  setCity(city: any){
    this.city$.next(city)
  }



  getCity(){
    return this.city$
  }


}