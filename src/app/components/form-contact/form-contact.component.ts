import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent {

  constructor(private http: HttpClient) { }

  handleSubmit(event: Event) {
    event.preventDefault();

    const myForm = event.target as HTMLFormElement;
    const formData = new FormData(myForm);

    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post('/', formData, { headers }).subscribe(
      () => {
        alert('Formulario enviado correctamente');

      },
      error => {
        console.error(error);
        alert('Error al enviar el formulario');
      }
    );
  }
}
