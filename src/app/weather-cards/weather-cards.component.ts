import { Component, OnInit } from '@angular/core';
import { Weather } from '../model/Weather';
import { WeatherService } from '../services/WeatherService';
import { City } from '../model/City';
import { TransfereService } from '../transfer-service/TransferService';
import { ChangeDetectorRef } from '@angular/core';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import{map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-weather-cards',
  templateUrl: './weather-cards.component.html',
  styleUrls: ['./weather-cards.component.scss'],
  animations: [
    trigger("inOutAnimation", [
      state("in", style({ opacity: 1 })),
      transition(":enter", [
        animate(
          500,
          keyframes([
            style({ transform: 'scale(1,1) translateY(0)' }),
            style({ transform: 'scale(1.1, 0.9) translateY(0)' }),
            style({ transform: 'scale(0.9, 1.1) translateY(-100px)' }),
            style({ transform: 'scale(1.05, 0.95) translateY(0)' }),
            style({ transform: 'scale(1,1) translateY(-7px)' }),
            style({ transform: 'scale(1,1) translateY(0)' }),
          ])
        )
      ]),
      transition(":leave", [
        animate(
          300,
          keyframes([
  
            style({ opacity: 1, offset: 0, width: '500px', height:'100%' }),
            style({ opacity: 0.75, offset: 0.25, width: '400px', height:'80%' }),
            style({ opacity: 0.5, offset: 0.5, width: '300px', height:'50%'}),
            style({ opacity: 0.25, offset: 0.75, width: '100px', height:'20%' }),
            style({ opacity: 0, offset: 1,  width: '0px', height:'0%'  }),
          ])
        )
      ])
    ])
  ]
})

export class WeatherCardsComponent implements OnInit {
  forecasts: Weather[] = [];
  forecastsStorage: Weather[] = [];


  cityForForecast: any = this.transferService.getCity();
  

  weatherId!: number;

  constructor(private weatherService: WeatherService, private transferService: TransfereService, private changeDetector: ChangeDetectorRef) { 
    this.transferService.selectedCity$.subscribe((value) => {
      this.refresh(value)
      
    })
  }

  ngOnInit(){

  }
  
  refresh(value: any){
    
  this.forecastsStorage = JSON.parse(localStorage.getItem('weathers') || '[]')
   console.log(this.forecastsStorage);
    if(this.forecasts.find(data => data.locationID ==value.identity)==null){
      if(this.forecastsStorage.length !=0){
        this.addForecast(value)
       }
    }else{
      alert("Prognoza dla miasta "+ value.name+ " ju?? si?? wy??wietla")
    }
  }
  addForecast(value: any){
    console.log("id przychodz??cego miasta")
    console.log(value.identity)
    let cityToDisplay = this.forecastsStorage.find(data => data.locationID == value.identity)
    if(cityToDisplay ==null){
      this.pushDataFromRest(value)
    }else{
      this.pushDataFromStorage(cityToDisplay)
    }
  }
  pushDataFromRest(value: any){
    this.weatherService.getWeatherForLocation(value.identity).pipe(
      map(data => this.forecasts.push(data))
      ).subscribe(data =>{
      localStorage.setItem("weathers", JSON.stringify(this.forecasts));
 });

  }
  pushDataFromStorage(value: any){
    this.forecasts.push(value)
  }

   
  removeCardByLocationID(locationIDOther:number){
    this.weatherId = locationIDOther
    this.forecasts.forEach((element,index)=>{
      if(element.locationID==this.weatherId) {
        this.forecasts.splice(index, 1)
      };
   });

   }

}
