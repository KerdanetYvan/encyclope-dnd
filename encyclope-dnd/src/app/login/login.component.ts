import { Component, inject  } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AuthentificationService } from '../authentification.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required])

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  Connexion() {
    // console.log(this.email.value,this.password.value)
    if(! this.email.value) return;
    if(! this.password.value) return;
    if(! this.email.valid) return;
    if(! this.password.valid) return;
    this.authentificationService.SignIn(this.email.value, this.password.value)
  }
  private auth: Auth = inject(Auth);

  constructor(public authentificationService:AuthentificationService){

  }
}
