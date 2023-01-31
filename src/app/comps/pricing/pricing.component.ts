import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

plan = "Basic";
r1= "fas fa-check";
r2= "fas fa-check";
r3= "fas fa-check";
r4= "fas fa-xmark";
r5= "fas fa-xmark";
r6= "fas fa-xmark";
r7= "fas fa-xmark";
r8= "fas fa-check";
r9= "fas fa-check";
r10= "fas fa-check";
r11= "Buy Now";



emb = "false";
vart = "false";
logo = "false";
  constructor() { }

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

basic(){
  this.plan = "Basic";
  this.r1= "fas fa-check";
  this.r2= "fas fa-check";
  this.r3= "fas fa-check";
  this.r4= "fas fa-xmark";
  this.r5= "fas fa-xmark";
  this.r6= "fas fa-xmark";
  this.r7= "fas fa-xmark";
  this.r8= "fas fa-check";
  this.r9= "fas fa-check";
  this.r10= "fas fa-check";
  this.r11= "Buy Now";
}
standard(){
  this.plan = "Standard";
  this.r1= "fas fa-check";
  this.r2= "fas fa-check";
  this.r3= "fas fa-check";
  this.r4= "fas fa-xmark";
  this.r5= "fas fa-check";
  this.r6= "fas fa-check";
  this.r7= "fas fa-check";
  this.r8= "fas fa-check";
  this.r9= "fas fa-check";
  this.r10= "fas fa-check";
  this.r11= "Buy Now";
}
premium(){
  this.plan = "Premium";
  this.r1= "fas fa-check";
  this.r2= "fas fa-check";
  this.r3= "fas fa-check";
  this.r4= "fas fa-check";
  this.r5= "fas fa-check";
  this.r6= "fas fa-check";
  this.r7= "fas fa-check";
  this.r8= "fas fa-check";
  this.r9= "fas fa-check";
  this.r10= "fas fa-check";
  this.r11= "Buy Now";
}

managed(){
  this.plan = "Managed";
  this.r1= "fas fa-check";
  this.r2= "fas fa-check";
  this.r3= "fas fa-check";
  this.r4= "fas fa-check";
  this.r5= "fas fa-check";
  this.r6= "fas fa-check";
  this.r7= "fas fa-check";
  this.r8= "fas fa-check";
  this.r9= "fas fa-check";
  this.r10= "fas fa-check";
  this.r11= "Buy Now";
}
}
