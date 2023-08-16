import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'; 
import { user } from "../../../model/model"
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent { 

  formLogin: FormGroup;  
  hide = true;
  loginError = false;
  loading = false;

  constructor( private fb: FormBuilder, private authService: AuthService, private router: Router ) {
    this.formLogin = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]]
    })    
  }

  getErrorMessage(controlName: string) {
    const control = this.formLogin.get(controlName);

    if (!control) {
        return '';
    }

    if (control.hasError('required')) {
        return 'Este campo es obligatorio';
    }

    if (controlName === 'email' && control.hasError('email')) {
        return 'No es un email válido';
    }

    if (controlName === 'password' && control.hasError('minlength')) {
        return 'La contraseña debe tener al menos 8 carácteres. 12345678';
    }    

    return '';
}

login(email: string, password: string): void {
  this.loading = true;
  const loginObservable : Observable<boolean> = this.authService.login({ email, password });

  loginObservable.subscribe(
    isAuthenticated => {
      this.loading = false;

      if (isAuthenticated) {
        const loggedUser: user = {
          email: email,
          password: password
        };
        this.router.navigate(['/dashboard']); 
      } else {
        this.loginError = true;
      }
    }    
  )  
  }  
}
