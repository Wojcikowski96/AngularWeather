import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/LoginService';
@Component({
  selector: 'app-grid-container',
  templateUrl: './grid-container.component.html',
  styleUrls: ['./grid-container.component.css']
})
export class GridContainerComponent implements OnInit {

  constructor(private app: AppService) {

  }
  ngOnInit(): void {
    console.log("Na init homa")
    console.log(this.app.authenticated)
    throw new Error('Method not implemented.');
  }

  authenticated() { return this.app.authenticated; }

}
