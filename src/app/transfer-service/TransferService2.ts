import { Injectable } from '@angular/core';
import { City } from '../model/City';

@Injectable(    
    {
    providedIn: 'root'
    }
  )
export class TransfereService2 {
    private callback = null as unknown as (city: City[]) => void;
    
  constructor(


  ) { }


  private cities = [] as City[];

  setMultipleCityData(cities: City[]){
    console.log("działa")
    this.cities = cities;
    this.callback(cities);
  }



  subscribe(callback: (cities: City[]) => void){
    this.callback = callback;
  }


  getCities(){
    return this.cities;
  }


}