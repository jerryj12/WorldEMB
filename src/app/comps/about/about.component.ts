import { Component, HostListener, OnInit } from '@angular/core';
import $ from 'jquery';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

@HostListener('scroll', ['$event'])
export class AboutComponent implements OnInit {
a:any;
  constructor() { }

  ngOnInit(): void {
   
  }

  onWindowScroll($event: any) {
    if(this.a == 'stop') {
    return;
}
this.a = 'stop';
    $('.counter-count').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          duration: 5000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
    });
    
  }

 
 
 
}


