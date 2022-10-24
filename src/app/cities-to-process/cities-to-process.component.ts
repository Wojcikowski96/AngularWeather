import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { City } from '../model/City';
import { TransfereService } from '../transfer-service/TransferService';
//import { TransfereService2 } from '../transfer-service/TransferService2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cities-to-process',
  templateUrl: './cities-to-process.component.html',
  styleUrls: ['./cities-to-process.component.css']
})
export class CitiesToProcessComponent implements OnInit{
 
  cityToAdd: City = this.transfereService.getCity();

  

  citiesToProcess = [] as City[]

  constructor(private transfereService: TransfereService) {
    this.transfereService.subscribe((city: City) => {
      this.addCityToProcess(city);
    })

   }


  addCityToProcess(city: City) : void{
      this.citiesToProcess.push(city)
      console.log(this.citiesToProcess)
      //this.transfereService2.setMultipleCityData(this.citiesToProcess);
  }
  ngOnInit(): void {
  }

}
