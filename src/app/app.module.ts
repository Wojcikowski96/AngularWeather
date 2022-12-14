import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GridContainerComponent } from './grid-container/grid-container.component';
import { SelectPredefinedCityComponent } from './select-predefined-city/select-predefined-city.component';
import { CitiesToProcessComponent } from './cities-to-process/cities-to-process.component';
import { RouterModule, Routes } from '@angular/router';
import { WeatherCardsComponent } from './weather-cards/weather-cards.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginFormComponent } from './login-form/login-form.component';
import { AppService } from './app-service';
@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr);
  }
}

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login'},
  { path: 'home', component: GridContainerComponent},
  { path: 'login', component: LoginFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    GridContainerComponent,
    SelectPredefinedCityComponent,
    CitiesToProcessComponent,
    WeatherCardsComponent,
    LoginFormComponent
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
  providers: [AppService, { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
