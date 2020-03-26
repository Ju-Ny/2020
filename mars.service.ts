import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarsService {

  osoite : any = 'https://api.covid19api.com/summary';

  date : any = new Date();

  listat : any[];
  tartunnat : any;
  varmistetut : any;
  pvm : any;

  constructor(private http : HttpClient) { 

    this.http.get(this.osoite).subscribe((data : any) => {
    
    this.listat =data.Countries;
    this.tartunnat = data.NewConfirmed;
    this.pvm = data.Date
  
    //console.log(data.Countries); 
    
    
  }
    
    )
}
}