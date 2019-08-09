import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatSidenavModule, MatToolbarModule, MatListModule, MatCardModule, MatIconModule, MatMenuModule, MatFormFieldModule, MatTableModule, MatPaginatorModule, MatInputModule } from '@angular/material';

import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { NotaSpeseComponent } from './component/nota-spese/nota-spese.component';
import { CalendarioComponent } from './component/calendario/calendario.component';
import { AutovettureComponent } from './component/autovetture/autovetture.component';
import { UtenteComponent } from './component/utente/utente.component';
import { TableComponent } from './component/table/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    NotaSpeseComponent,
    CalendarioComponent,
    AutovettureComponent,
    UtenteComponent,
    TableComponent
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
    MatMenuModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
