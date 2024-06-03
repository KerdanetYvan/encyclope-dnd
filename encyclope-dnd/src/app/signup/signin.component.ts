import { AuthentificationService } from '../authentification.service';
import { Component, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SignupComponent {
  private auth: Auth = inject(Auth);
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password1 = new FormControl('', [Validators.required])
  password2 = new FormControl('', [Validators.required])

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  Creation(){
    console.log(this.email.value, this.password1.value, this.password2.value)
    if(! this.email.value) return;
    if(! this.password1.value) return;
    if(! this.password2.value) return;
    if(! this.email.valid) return;
    if(! this.password1.valid) return;
    if(! this.password2.valid) return;
    if(!(this.password1.value === this.password2.value)) return;
    this.authentificationService.SignUp(this.email.value, this.password1.value)
  }

  constructor(public authentificationService:AuthentificationService){}
}
