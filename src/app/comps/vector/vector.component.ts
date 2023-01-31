import { Component, OnInit } from '@angular/core';
import { FileUploadService } from 'src/app/file-upload.service';
import { EmailService } from 'src/app/email.service';
@Component({
  selector: 'app-vector',
  templateUrl: './vector.component.html',
  styleUrls: ['./vector.component.css']
})
export class VectorComponent implements OnInit {

  shortLink: string = "";
  email = "";
  message = "";
  name = "";
  phone = "";
  inquiry = "";
  file = '';
val = 'false';
submit: any;
  loading: any;

  methods= "false";
  types = "true";
  constructor(private fileUploadService: FileUploadService,private emailing: EmailService) { }

  ngOnInit(): void {
    this.submit = 'false';
  }
  onChange(event:any) {
    this.file = event.target.files[0];
}
submits(){
  this.submit = 'true';
  setTimeout( ()=>{
    this.submit = 'False';    
    }, 2000);
  
  if(this.email!='' && this.name != ''){
    if(this.file!=''){
      this.fileUploadService.upload(this.file).subscribe(
          (event: any) => {
              if (typeof (event) === 'object') {
    
                  // Short link via api response
                  this.shortLink = event.link;
                 // console.log(this.shortLink);
                  const msgs  = 'Name: '+this.name+'<br>'+'Email: '+this.email+'<br>'+'Phone: '+this.phone+'<br>'+'Message: '+this.message+'<br>'+'File: '+event.link;
                  this.emailing.mail(msgs).subscribe((resp:any)=>{
                   // console.log(resp);
                   this.name = "";
                    this.email = "";
                    this.phone = ""
                    this.message = "";
                   }),(error:any)=>{
                     console.log(error);
                   }
                  this.loading = false; // Flag variable 
              }
          }
      );
    }
    else{
      const msgs  = 'Name: '+this.name+'<br>'+'Email: '+this.email+'<br>'+'Phone: '+this.phone+'<br>'+'Message: '+this.message;
      this.emailing.mail(msgs).subscribe((resp:any)=>{
       // console.log(resp);
        this.email = "";
        this.name = "";
        this.phone = ""
        this.message = "";
       }),(error:any)=>{
         console.log(error);
       }
    }
 
   
    
  
  }
  }


type(){
  this.methods = "true";
  this.types = "false";
}
method(){
  this.methods = "false";
  this.types = "true";
}
}
