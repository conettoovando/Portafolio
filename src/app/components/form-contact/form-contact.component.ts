import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NetlifyFormsService } from 'src/app/netlify-forms/netlify-forms.service';
import { Feedback } from 'src/app/contact/contact';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private netlifyForms: NetlifyFormsService
  ) { }
  formSubmitted = false;
  errorMessage = "Por favor, rellena todos los campos antes de enviar el formulario.";

  feedbackForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    description: ['', Validators.required],
  });

  onSubmit() {
    this.formSubmitted = true;
    if (this.feedbackForm.invalid) {
      return;
    }
    this.netlifyForms.submitFeedback(this.feedbackForm.value as Feedback).subscribe(
      () => {
        this.feedbackForm.reset();
        this.router.navigateByUrl('/success');
      },
    );
  }
}
