import {ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import sdata from './images.json';


interface Student {  
  id: String;  
  name: String;  

}  

@Component({
  selector: 'app-bigportfolio',
  templateUrl: './bigportfolio.component.html',
  styleUrls: ['./bigportfolio.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class BigportfolioComponent implements OnInit {

  page: number = 1;
  students: Student[] = sdata;
  embroidery: Student [] = [];
  vector: Student [] = [];
  source: any;
  loadmore = 'false';
  loadtxt = 'Load More';
  indus!: number;
 
  constructor() {
   
   }

  ngOnInit(): void {
  
  }

  emb(){
    this.students = sdata;
    var i;

    for(i=0;i<this.students.length;i++){
      if(this.students[i].id =="emb") {
        this.embroidery.push(this.students[i]);
      };
    }

  this.students = this.embroidery;
this.embroidery = [];
(<any>$('.carousel')).carousel({   
  pause: true,
  interval: false
}).carousel(0);
  }
 

  vec(){
    this.students = sdata;
    var i;
    for(i=0;i<this.students.length;i++){
      if(this.students[i].id =="vec") {
        this.vector.push(this.students[i]);
      };
    }
 
    this.students = this.vector;
  this.vector=[];
  (<any>$('.carousel')).carousel({   
    pause: true,
    interval: false
}).carousel(0);
  }

  
getsrc(src : any, ind:number){
  (<any>$('.carousel')).carousel({   
    pause: true,
    interval: false
}).carousel(0);
this.source = src;
this.indus = ind+1;

}


loading(){
 if(this.loadmore == 'false'){
  this.loadmore = 'true';
  this.loadtxt = 'Load Less';
 }
 else{
  this.loadmore = 'false';
   this.loadtxt = 'Load More';
 }
    
  
 
  
}

}



