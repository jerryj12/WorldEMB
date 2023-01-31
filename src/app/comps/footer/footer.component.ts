import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/email.service';
import { FileUploadService } from 'src/app/file-upload.service';
import { FormGroup,FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
email = '';
message = '';
msg= "anything"
val = 'false';
submit: any;
file = '';
  loading = true;
  shortLink: any;

 
  constructor(private emailing: EmailService, private fileUploadService: FileUploadService) { }

  ngOnInit(): void {
    this.submit = 'false';
  }

  onChange(event:any) {
    this.file = event.target.files[0];
}

validate(){
  
if(this.email == ''){
  this.val = "false";
  this.submit = 'false';
}
else{
  this.val = "true";
  this.submit = 'true';
} 
}

submits(){
  this.submit = 'true';
  setTimeout( ()=>{
    this.submit = 'False';    
    }, 2000);
if(this.email.match("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")){
  this.val = 'true';
  setTimeout( ()=>{
    this.val = 'False';    
    }, 2000);
  if(this.email!=''){
    if(this.file!=''){
      this.fileUploadService.upload(this.file).subscribe(
          (event: any) => {
              if (typeof (event) === 'object') {
    
                  // Short link via api response
                  this.shortLink = event.link;
                 // console.log(this.shortLink);
                  const msgs  = 'Email: '+this.email+'<br>'+'Message: '+this.message+'<br>'+'File: '+event.link;
                  this.emailing.mail(msgs).subscribe((resp:any)=>{
                 //   console.log(resp);
                    this.email = "";
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
      const msgs  = 'Email: '+this.email+'<br>'+'Message: '+this.message
      this.emailing.mail(msgs).subscribe((resp:any)=>{
       // console.log(resp);
        this.email = "";
        this.message = "";
       }),(error:any)=>{
         console.log(error);
       } 
    }
 
   
    
  
  

   

}
  }
}

}



