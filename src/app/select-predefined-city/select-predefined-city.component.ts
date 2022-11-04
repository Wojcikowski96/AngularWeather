import { Component, OnInit } from '@angular/core';
import { City } from '../model/City';
import { CitiesService } from '../services/CitiesService';
import { TransfereService } from '../transfer-service/TransferService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-predefined-city',
  templateUrl: './select-predefined-city.component.html',
  styleUrls: ['./select-predefined-city.component.scss']
})
export class SelectPredefinedCityComponent implements OnInit {
  citiesList = [] as City[];

  selectedCityId  = null as unknown as number;
  
  constructor(private citiesService: CitiesService, private transferService: TransfereService, private router:Router) { }

  ngOnInit(): void {
    this.citiesService.getCities().subscribe(data =>{
      this.citiesList = data;
    })

  }

  setCityToPass(){
    let city = this.citiesList.find(x =>x.identity == this.selectedCityId)
    this.transferService.setCity(city!);
    // this.router.navigateByUrl('cities-to-process');
  }

}
