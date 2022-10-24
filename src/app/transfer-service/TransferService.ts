import { Injectable } from '@angular/core';
import { City } from '../model/City';

@Injectable(    
    {
    providedIn: 'root'
    }
  )
export class TransfereService {
    private callback = null as unknown as (city: City) => void;
    
  constructor(


  ) { }

  private city: City = new City;
 

  setSingleCityData(city: City){
    this.city = city;
    this.callback(city);
  }



  subscribe(callback: (city: City) => void){
    this.callback = callback;
  }


  getCity(){
    return this.city;
  }


}