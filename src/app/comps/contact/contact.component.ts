import { Component, OnInit } from '@angular/core';
import { FileUploadService } from 'src/app/file-upload.service';
import { EmailService } from 'src/app/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  shortLink: string = "";
  email = "";
  message = "";
  name = "";
  phone = "";
  inquiry = "";
  file = '';
  service = 'Select Service';
val = 'false';
submit: any;
  loading: any;

  constructor(private fileUploadService: FileUploadService, private emailing: EmailService) { }

  ngOnInit(): void {
    this.submit = 'false';
  }
  onChange(event:any) {
    this.file = event.target.files[0];
}
  submits(login:any){    
    this.submit = 'true';
    setTimeout( ()=>{
      this.submit = 'False';    
      }, 2000);
    if(this.email.match("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")){
  this.val = 'true';
  setTimeout( ()=>{
    this.val = 'False';    
    }, 2000);
    if(this.email!='' && this.name != ''){
      if(this.file!=''){
        this.fileUploadService.upload(this.file).subscribe(
            (event: any) => {
                if (typeof (event) === 'object') {
      
                    // Short link via api response
                    this.shortLink = event.link;
                   // console.log(this.shortLink);
                    const msgs  = 'Service: '+this.service+'<br>'+'Name: '+this.name+'<br>'+'Email: '+this.email+'<br>'+'Phone: '+this.phone+'<br>'+'Message: '+this.inquiry+'<br>'+'File: '+event.link;
                    this.emailing.mail(msgs).subscribe((resp:any)=>{
                     // console.log(resp);
                     }),(error:any)=>{
                       console.log(error);
                     }
                    this.loading = false; // Flag variable 
                }
            }
        );
      }
      else{
        const msgs  = 'Name: '+this.name+'<br>'+'Email: '+this.email+'<br>'+'Phone: '+this.phone+'<br>'+'Service: '+this.service+'<br>'+'Message: '+this.inquiry;
        this.emailing.mail(msgs).subscribe((resp:any)=>{
         // console.log(resp);
         }),(error:any)=>{
           console.log(error);
         }
      }
   
     
      
    
    
    }
  }
  
  }


}
