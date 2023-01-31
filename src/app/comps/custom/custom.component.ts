import { Component, OnInit } from '@angular/core';
import { FileUploadService } from 'src/app/file-upload.service';
import { EmailService } from 'src/app/email.service';
@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {
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

  readmore = "readmore";
  readmore2 = "readmore";
  readmore3 = "readmore";
  readmore4 = "readmore";
  readmore5 = "readmore";
  readmore6 = "readmore";
  readmore7 = "readmore";
  readmore8 = "readmore";

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