import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpricing',
  templateUrl: './mainpricing.component.html',
  styleUrls: ['./mainpricing.component.css']
})
export class MainpricingComponent implements OnInit {

  constructor() { }
  emb = "false";
  vart = "false";
  logo = "false";
  ngOnInit(): void {
  }
  custom(){
    this.emb = 'false';
    this.vart = 'false';
    this.logo = 'false';
  }
  custom2(){
    this.emb = 'true';
    this.logo = 'false';
    this.vart = 'true';
  }
  custom3(){
    this.emb = 'ture';
    this.vart = 'false';
    this.logo = 'true';
    
  }

}
