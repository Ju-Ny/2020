import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UusiService {
  
  osoite : any = 'https://api.covid19api.com/summary';

  data : any;
  listat : any;
  tartunnat : any =0;
  kokonais : any;
  varmistetut : any;
  pvm : any;

  constructor(private http : HttpClient) {

    this.http.get(this.osoite).subscribe((data : any) => {

    this.data = data;
    this.listat = data.Countries;
    this.kokonais = data.TotalConfirmed;
    this.tartunnat = data.NewConfirmed;
    this.pvm = data.Date

    });

   }

}

// https://covid19api.com/ Sivu mistä api.