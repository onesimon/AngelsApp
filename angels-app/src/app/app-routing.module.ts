import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './component/home-page/home-page.component';
import { NotaSpeseComponent } from './component/nota-spese/nota-spese.component';
import { UtenteComponent } from './component/utente/utente.component';
import { AutovettureComponent } from './component/autovetture/autovetture.component';
import { CalendarioComponent } from './component/calendario/calendario.component';

const routes: Routes = [
    { path: 'home', component: HomePageComponent},
    { path: 'notaSpese', component: NotaSpeseComponent},
    { path: 'utente', component: UtenteComponent},
    { path: 'autovettura', component: AutovettureComponent},
    { path: 'calendario', component: CalendarioComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
