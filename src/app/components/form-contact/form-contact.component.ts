import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { } // Agrega "private http: HttpClient" aquí

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      // Define tus campos y validaciones aquí
      name: '',
      email: '',
      message: ''
    });
  }

  handleSubmit() {
    const formValues = this.myForm.value;
    const formData = new FormData();
    formData.append('name', formValues.name);
    formData.append('email', formValues.email);
    formData.append('message', formValues.message);

    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    const httpOptions = {
      headers: headers,
      params: new HttpParams(),
    };

    this.http.post('/', this.encodeFormData(formData), httpOptions).subscribe(
      response => {
        // Manejar la respuesta de Netlify
        alert('Mensaje enviado');
      },
      error => {
        // Manejar el error
        alert('Error al enviar el mensaje');
      }
    );
  }

  encodeFormData(data: FormData): string {
    const encodedPairs: string[] = [];

    data.forEach((value: FormDataEntryValue, key: string) => {
      if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
        encodedPairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
      }
    });

    return encodedPairs.join('&');
  }


}