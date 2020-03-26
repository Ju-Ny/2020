
import { Component } from '@angular/core';
import { UusiService } from './../uusi.service';
import { MarsService } from './../mars.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private uusi : UusiService, public mars : MarsService) {

   }

}
