import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GridContainerComponent } from './grid-container/grid-container.component';
import { SelectPredefinedCityComponent } from './select-predefined-city/select-predefined-city.component';
import { CitiesToProcessComponent } from './cities-to-process/cities-to-process.component';
import { RouterModule, Routes } from '@angular/router';
import { WeatherCardsComponent } from './weather-cards/weather-cards.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: 'select-predefined-city', component: SelectPredefinedCityComponent},
  { path: 'cities-to-process', component: CitiesToProcessComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    GridContainerComponent,
    SelectPredefinedCityComponent,
    CitiesToProcessComponent,
    WeatherCardsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
