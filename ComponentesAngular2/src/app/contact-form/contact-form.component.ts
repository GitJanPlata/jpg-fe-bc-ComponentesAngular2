import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AbstractControl, ValidatorFn } from '@angular/forms';



@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent {

  @Output() formSubmit: EventEmitter<any> = new EventEmitter();
  contactForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
    validation: ['', [Validators.required, validateAnswer()]]
  });

  constructor(private formBuilder: FormBuilder) {}

  onSubmit() {
    if (this.contactForm.valid) {
      this.formSubmit.emit(this.contactForm.value);
      this.contactForm.reset();
    }
  }
}

// Método para comprobar que el resultado de la operacion del campo validación sea 5
function validateAnswer(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const correctAnswer = 5;
    return control.value == correctAnswer ? null : { 'incorrectAnswer': { value: control.value } };
  };
}