import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  myIndex = 0;
  i:any;
  constructor() {


    
    
   }

  ngOnInit(): void {
  
  }
 
  myfunc(){
    console.log("CLICKED");
    
    var targetElement = document.getElementById("target")!;
  targetElement.className = "animate";

  }

  


}
