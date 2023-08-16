import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, delay, of } from 'rxjs';
import { user } from '../../model/model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();

  private username: string = "Lemoncoder";

  constructor() {
    const savedAuthStatus = localStorage.getItem('authStatus');
    if (savedAuthStatus === 'true') {
      this.isLoggedInSubject.next(true);
    }
  }

  private saveAuthStatusToLocalStorage(isLoggedIn: boolean) {
    localStorage.setItem('authStatus', isLoggedIn.toString());
  }

  login({ email, password }: user): Observable<boolean> {
    if (email === "master@lemoncode.net" && password === '12345678') {
      this.isLoggedInSubject.next(true); 
      this.saveAuthStatusToLocalStorage(true);
      return of(true).pipe(
        delay(2000)
      );
    } else {
      return of(false).pipe(
        delay(2000)
      );
    }
  }

  logout(): void {
    this.isLoggedInSubject.next(false); 
    this.saveAuthStatusToLocalStorage(false);
  }

  isLogged(): boolean {
    return this.isLoggedInSubject.value;
  }

  getUsername(): string {
    return this.username;
  }
}
