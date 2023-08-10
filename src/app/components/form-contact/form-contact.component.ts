import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent {

  constructor(private http: HttpClient) { }

  person = {
    name: '',
    email: '',
  }

  procesar() {
    const body = new HttpParams()
      .set('form-name', 'contact')
      .append('name', this.person.name)
      .append('email', this.person.email)

    this.http.post('/', body.toString(), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).subscribe(
      res => { }
    );
  }
}
