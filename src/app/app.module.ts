import { CalendarComponent } from './calendar/calendar/calendar.component';
import { CameraComponent } from './camera/camera.component';
import { ItemService } from './item.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { OAuthModule } from 'angular-oauth2-oidc';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';




// import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { HomeComponent } from './home/home.component';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { SharedModule } from './shared/shared.module';
import { PicturesComponent } from './pictures/pictures.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserComponent } from './user/user.component';
import { DonateComponent } from './donate/donate.component';

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,

    OAuthModule.forRoot(),
    // FlightBookingModule, // Würde Lazy Loading verhindern!
    RouterModule.forRoot(
      APP_ROUTES,
      { preloadingStrategy: PreloadAllModules }
    ),
    SharedModule.forRoot()
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    PicturesComponent,
    TasksComponent,
    DashboardComponent,
    UserComponent,
    DonateComponent,
    CameraComponent,
    CalendarComponent
  ],
  providers: [
    PicturesComponent,
    ItemService,],
  // Global
  // { provide: FlightService, useClass: FlightService}
  // FlightService
  bootstrap: [AppComponent]
})


export class AppModule  { }
