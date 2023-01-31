import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import * as AOS from 'aos';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
 readmore = "readmore";
 readmore2 = "readmore";
 readmore3 = "readmore";
 readmore4 = "readmore";
 readmore5 = "readmore";
 readmore6 = "readmore";
 readmore7 = "readmore";
 readmore8 = "readmore";
  constructor() {
   }


  ngOnInit(): void {
    AOS.init();

  }
  read(){
  if(this.readmore=="readmore"){
    this.readmore = "readless";
    const doc = document.getElementById("readm1")?.style;
    doc!.display = 'block';
  }
  else{
    const doc = document.getElementById("readm1")?.style;
    doc!.display = 'none';
    this.readmore = "readmore";
  }
  }
  read2(){
    if(this.readmore2=="readmore"){
      this.readmore2 = "readless";
      const doc = document.getElementById("readm2")?.style;
      doc!.display = 'block';
    }
    else{
      const doc = document.getElementById("readm2")?.style;
      doc!.display = 'none';
      this.readmore2 = "readmore";
    }
    }
    read3(){
      if(this.readmore3=="readmore"){
        this.readmore3 = "readless";
        const doc = document.getElementById("readm3")?.style;
        doc!.display = 'block';
      }
      else{
        const doc = document.getElementById("readm3")?.style;
        doc!.display = 'none';
        this.readmore3 = "readmore";
      }
      }
      read4(){
        if(this.readmore4=="readmore"){
          this.readmore4 = "readless";
          const doc = document.getElementById("readm4")?.style;
          doc!.display = 'block';
        }
        else{
          const doc = document.getElementById("readm4")?.style;
          doc!.display = 'none';
          this.readmore4 = "readmore";
        }
        }
        read5(){
          if(this.readmore5=="readmore"){
            this.readmore5 = "readless";
            const doc = document.getElementById("readm5")?.style;
            doc!.display = 'block';
          }
          else{
            const doc = document.getElementById("readm5")?.style;
            doc!.display = 'none';
            this.readmore5 = "readmore";
          }
          }
          read6(){
            if(this.readmore6=="readmore"){
              this.readmore6 = "readless";
              const doc = document.getElementById("readm6")?.style;
              doc!.display = 'block';
            }
            else{
              const doc = document.getElementById("readm6")?.style;
              doc!.display = 'none';
              this.readmore6 = "readmore";
            }
            }
            read7(){
              if(this.readmore7=="readmore"){
                this.readmore7 = "readless";
                const doc = document.getElementById("readm7")?.style;
                doc!.display = 'block';
              }
              else{
                const doc = document.getElementById("readm7")?.style;
                doc!.display = 'none';
                this.readmore7 = "readmore";
              }
              }
              read8(){
                if(this.readmore8=="readmore"){
                  this.readmore8 = "readless";
                  const doc = document.getElementById("readm8")?.style;
                  doc!.display = 'block';
                }
                else{
                  const doc = document.getElementById("readm8")?.style;
                  doc!.display = 'none';
                  this.readmore8 = "readmore";
                }
                }
             
}
