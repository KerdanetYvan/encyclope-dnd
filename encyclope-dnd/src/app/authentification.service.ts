import { Injectable } from '@angular/core';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  constructor() {}
  public SignIn(Email: string, Passwrd: string) {
    const auth = getAuth();
    //console.log(Email,Passwrd)
    signInWithEmailAndPassword(auth, Email, Passwrd)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("Vous êtes conecté");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  public SignUp(Email:string, Passwrd:string){
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, Email, Passwrd)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert("Vous êtes conecté");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });

  }
}
