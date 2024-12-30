import { Inject, Injectable, signal } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, tap } from 'rxjs';
import { catchError } from 'rxjs/operators'; 
import { SignUpRequest } from '../../interface/signup-request.interface'; 
import { LoginRequest } from '../../interface/login-request.interface';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = signal<boolean>(false)
  router = Inject(Router);
  private BASE_URL = 'http://localhost:8080/api/auth'; 
  constructor(private http: HttpClient) { }

  register(data: SignUpRequest): Observable<void> {
    return this.http.post<void>(`${this.BASE_URL}/register`, data);
    catchError(this.handleError)
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = error.error.message;
    } else {
      // Server-side error
      errorMessage = error.error.message || 'Server error';
    }
    return throwError(() => ({
      error: {
        message: errorMessage,
      },
    }));
  }


  login(data: LoginRequest): Observable<string> {
    return this.http.post<string>(`${this.BASE_URL}/login`, data, { responseType: 'text' as 'json' }).pipe(
      
      // catchError(this.handleError)
      catchError((error) => {
        // Traitez les erreurs spécifiques ici, ou renvoyez une erreur générique
        if (error.status === 401) {
          return throwError(() => new Error('Invalid credentials'));
        } else if (error.status === 403) {
          return throwError(() => new Error('Account not verified'));
        }
        return throwError(() => new Error('An unknown error occurred'));
      }),
      tap((token: string) => {
        // Stocker le token JWT dans le localStorage
        localStorage.setItem('jwt', token);
        this.isLoggedIn.update(() => true)
      })
    );
  }

  logout() {
    localStorage.removeItem('jwt');
    this.isLoggedIn.update(() => false)
    this.router.navigate(['/login']);
  }
  
  
}
