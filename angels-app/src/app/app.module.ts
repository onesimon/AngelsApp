import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatSidenavModule, MatToolbarModule, MatListModule, MatCardModule, MatIconModule, MatMenuModule } from '@angular/material';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotaSpeseComponent } from './nota-spese/nota-spese.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { AutovettureComponent } from './autovetture/autovetture.component';
import { UtenteComponent } from './utente/utente.component'; 

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    NotaSpeseComponent,
    CalendarioComponent,
    AutovettureComponent,
    UtenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
