import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserDTO, UserService } from '../../service/user/user.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  sittingsForm: FormGroup;
  isSubmit = false;
  errorMessage = '';
  successMessage = '';
  currentUser: UserDTO | null = null;  // Ajout de la variable currentUser

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
  ) {
    this.sittingsForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      nationality: ['', Validators.required],
      cin: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(8)]],
    });
  }

  ngOnInit() {
    this.loadUserData();
  }

  private loadUserData() {
    this.userService.getUserInfo().subscribe({
      next: (user: UserDTO) => {
        // Stockage des données utilisateur
        this.currentUser = user;
        
        this.sittingsForm.patchValue({
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
          nationality: user.nationality,
          cin: user.cin,
          email: user.email
        });
      },
      error: (err) => {
        this.errorMessage = 'Erreur lors du chargement des données';
        console.error(err);
      }
    });
  }

 

  onSubmit() {
    this.isSubmit = true;
    this.errorMessage = '';
    this.successMessage = '';

    if (this.sittingsForm.valid && this.currentUser?.id) {
      // Create update payload
      const updateData: UserDTO = {
        ...this.sittingsForm.value
      };

      this.userService.updateUser(updateData, this.currentUser.id).subscribe({
        next: (updatedUser: UserDTO) => {
          this.successMessage = 'Profile updated successfully';
          this.currentUser = updatedUser;
          // // Reset password fields
          // this.sittingsForm.patchValue({
          //   password: '',
          // });
          this.isSubmit = false;
        },
        // error: (error) => {
        //   this.errorMessage = 'Failed to update profile. Please try again.';
        //   console.error('Update error:', error);
        //   this.isSubmit = false;
        // }
      });
    } else {
      if (this.sittingsForm.errors?.['passwordMismatch']) {
        this.errorMessage = 'Passwords do not match';
      } else {
        this.errorMessage = 'Please fill in all required fields correctly';
      }
    }
  }

  
}