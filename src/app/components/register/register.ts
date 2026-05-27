import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.scss'],
  standalone: true,
})
export class Register {
  // Inject FormBuilder
  fb = inject(FormBuilder);

  // building the form with FormBuilder
  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  onSubmit() {
    console.log('Register');
  }
}
