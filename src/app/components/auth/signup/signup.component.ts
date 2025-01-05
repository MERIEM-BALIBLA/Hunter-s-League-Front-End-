import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../service/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupForm: FormGroup;
  isSubmitting = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      cin: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      nationality: ['', Validators.required],
      role: ['MEMBER']
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.isSubmitting = true;
      this.errorMessage = '';

      this.authService.register(this.signupForm.value).subscribe({
        next: (response) => {
          console.log('Registration successful', response);
          this.router.navigate(['/login']);

          // Handle successful registration (e.g., redirect to login)
        },
        error: (error) => {
          console.error('Registration failed', error);
          this.errorMessage = error.error?.message || 'Registration failed. Please try again.';
          this.isSubmitting = false;
        },
        complete: () => {
          this.isSubmitting = false;
        }
      });
    } 
    // else {
    //   this.markFormGroupTouched(this.signupForm);
    // }
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
    const field = this.signupForm.get(fieldName);
    return field ? field.invalid && (field.dirty || field.touched) : false;
  }

  getErrorMessage(fieldName: string): string {
    const control = this.signupForm.get(fieldName);
    if (control?.errors) {
      if (control.errors['required']) return `${fieldName} is required`;
      if (control.errors['email']) return 'Invalid email format';
      if (control.errors['minlength']) {
        return `${fieldName} must be at least ${control.errors['minlength'].requiredLength} characters`;
      }
    }
    return '';
  }
}