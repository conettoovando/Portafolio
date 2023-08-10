import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent {

  constructor(private http: HttpClient, private router: Router) { }

  handleSubmit(event: Event) {
    event.preventDefault();

    const myForm = event.target as HTMLFormElement;
    const formData = this.formDataToUrlEncoded(myForm);

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

  private formDataToUrlEncoded(form: HTMLFormElement): string {
    const formData = new FormData(form);
    const urlSearchParams = new URLSearchParams();

    formData.forEach((value, key) => {
      urlSearchParams.append(key, value.toString());
    });

    return urlSearchParams.toString();
  }
}
