import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { City } from '../model/City';
import { TransfereService } from '../transfer-service/TransferService';


@Component({
  selector: 'app-cities-to-process',
  templateUrl: './cities-to-process.component.html',
  styleUrls: ['./cities-to-process.component.scss']
})
export class CitiesToProcessComponent implements OnInit{
 
  cityToAdd: any = this.transfereService.getCity();

  

  citiesToProcess = [] as City[]

  constructor(private transfereService: TransfereService) {
    this.transfereService.selectedCity$.subscribe((city: City) => {
    
      this.citiesToProcess.push(city)

    })

   }


  ngOnInit(): void {
    this.citiesToProcess.length = 0
  }

}
