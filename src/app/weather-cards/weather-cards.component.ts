import { Component, OnInit } from '@angular/core';
import { Weather } from '../model/Weather';
import { WeatherService } from '../services/WeatherService';
import { City } from '../model/City';
import { TransfereService } from '../transfer-service/TransferService';
import { ChangeDetectorRef } from '@angular/core';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
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
          500,
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
  citiesForForecast: City[] = []

  weatherId!: number;

  cityToAdd: City = this.transferService.getCity();

  constructor(private weatherService: WeatherService, private transferService: TransfereService, private changeDetector: ChangeDetectorRef) { 
    console.log("konstruuję się")
  }

  async ngOnInit(): Promise<void> {

    this.transferService.subscribe((city: City) => {
      this.addCityForForecast(city);
      this.removeCardByLocationID
    })
  }
  refresh(){

    this.weatherService.getWeatherForLocation(this.citiesForForecast[this.citiesForForecast.length -1].identity).subscribe(data =>{
      console.log("data");
      console.log(data);
      this.forecasts.push(data);
 });

  }
  addCityForForecast(city: City){

      if(this.forecasts.find(data=>data.locationID == city.identity)==null){
        this.citiesForForecast.push(city)
        this.refresh()
      }else {
        alert("Prognoza dla miasta "+city.name+" już się pokazuje")
      }
      
   }
   
  removeCardByLocationID(locationIDOther:number){
    this.weatherId = locationIDOther
    console.log("lokacja  " + this.weatherId)
    
    this.forecasts.forEach((element,index)=>{
      if(element.locationID==this.weatherId) {
        this.forecasts.splice(index, 1)
        this.citiesForForecast.splice(index, 1)
      };
   });

   }

}
