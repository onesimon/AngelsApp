import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute){
  }

  title = 'angels-app';

  goToHome(){
    this.router.navigate(['homePage'], {relativeTo: this.activatedRoute});
  }
}
