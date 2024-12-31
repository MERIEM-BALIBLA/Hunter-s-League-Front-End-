import { Inject, Injectable, signal } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, tap } from 'rxjs';
import { catchError } from 'rxjs/operators'; 
import { SignUpRequest } from '../../interface/auth/signup-request.interface'; 
import { LoginRequest } from '../../interface/auth/login-request.interface';
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

         // Extraire le rôle à partir du token JWT
      const tokenParts = token.split('.');  // Séparer le token en 3 parties (header, payload, signature)

      if (tokenParts.length === 3) {
        // Décoder la partie payload (au milieu)
        const decodedPayload = atob(tokenParts[1]);

        // Convertir la chaîne décodée en objet JSON
        const payload = JSON.parse(decodedPayload);

        // Extraire le rôle
        const userRole = payload.role;  // Récupérer le rôle à partir du payload

        // Stocker le rôle dans localStorage
        localStorage.setItem('userRole', userRole);
      }
        this.isLoggedIn.update(() => true)
      })
    );
  }

  logout() {
    localStorage.removeItem('jwt');
    this.isLoggedIn.update(() => false)
    this.router.navigate(['/login']);
  }

  getRole(){
    tap((token: string) => {
      // Stocker le token JWT dans le localStorage
      localStorage.setItem('jwt', token);

       // Extraire le rôle à partir du token JWT
    const tokenParts = token.split('.');  // Séparer le token en 3 parties (header, payload, signature)

    if (tokenParts.length === 3) {
      // Décoder la partie payload (au milieu)
      const decodedPayload = atob(tokenParts[1]);

      // Convertir la chaîne décodée en objet JSON
      const payload = JSON.parse(decodedPayload);

      // Extraire le rôle
      const userRole = payload.role;  // Récupérer le rôle à partir du payload

      // Stocker le rôle dans localStorage
      localStorage.setItem('userRole', userRole);
    }
    })
  }

  
  
}
