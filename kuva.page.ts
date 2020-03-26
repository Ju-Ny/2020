import { MarsService } from './../mars.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-kuva',
  templateUrl: './kuva.page.html',
  styleUrls: ['./kuva.page.scss'],
})
export class KuvaPage implements OnInit {

  maa : any;

  constructor(private route : ActivatedRoute, private mars : MarsService) { }

  ngOnInit() {

    let indeksi = this.route.snapshot.paramMap.get("indeksi");

    this.maa = this.mars.listat[indeksi];

  }

}
