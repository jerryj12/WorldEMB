import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  mail(rooms:any){
    //console.log(rooms);
    return this.http.post('https://worldembroiderydigitzing.com/mailapi/embmail/mail2.php',rooms, { responseType: 'text' })
  }
}

