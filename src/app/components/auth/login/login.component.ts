import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { AuthService } from '../../../service/auth/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  isSubmitting = false;
  errorMessage = '';
  isAuthenticated: boolean = false;

  constructor(
      private fb: FormBuilder,
      private authService: AuthService,
      private router: Router
  )
  {
  this.isAuthenticated = !!localStorage.getItem('jwt');

  this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  
  onlogin() {
    if (this.loginForm.valid) {
      this.isSubmitting = true;
      this.errorMessage = '';
  
      this.authService.login(this.loginForm.value).subscribe({
        next: (token: string) => {
          console.log('Login successful', token);
          localStorage.setItem('jwt', token); // Stocker le token JWT dans le localStorage
          this.router.navigate(['/home']); // Rediriger vers la page d'accueil après une connexion réussie
        },
        error: (error) => {
          console.error('Login failed', error);
          this.errorMessage = error.error?.message || 'Login failed. Please try again.';
          this.isSubmitting = false;
        },
        complete: () => {
          this.isSubmitting = false;
        }
      });
    } else {
      this.markFormGroupTouched(this.loginForm);
    }
  }
  


  // Helper method to mark all controls as touched
  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  // Helper methods for template
  isFieldInvalid(fieldName: string): boolean {
    const field = this.loginForm.get(fieldName);
    return field ? field.invalid && (field.dirty || field.touched) : false;
  }

  getErrorMessage(fieldName: string): string {
    const control = this.loginForm.get(fieldName);
    if (control?.errors) {
      if (control.errors['required']) return `${fieldName} is required`;
      if (control.errors['email']) return 'Invalid email format';
      if (control.errors['minlength']) {
        return `${fieldName} must be at least ${control.errors['minlength'].requiredLength} characters`;
      }
    }
    return '';
  }

  logout() {
    this.authService.logout(); 
    this.router.navigate(['/login']);
  }

}
