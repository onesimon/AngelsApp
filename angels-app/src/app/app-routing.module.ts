import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NotaSpeseComponent } from './nota-spese/nota-spese.component';

const routes: Routes = [
    { path: 'home', component: HomePageComponent},
    { path: 'notaSpese', component: NotaSpeseComponent}
    //{ path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
