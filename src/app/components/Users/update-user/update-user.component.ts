import { Component } from '@angular/core';
import { UserDTO, UserService } from '../../../service/user/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  standalone: true,
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {

  Form: FormGroup;
  isSubmit = false;
  errorMessage = '';
  successMessage = '';
  userId: string = ''; // ID utilisateur à mettre à jour

  constructor(private userService: UserService, private fb: FormBuilder) {
    this.Form = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required]
    });
  }

  submitForm() {
    this.isSubmit = true;

    if (this.Form.invalid) {
      this.errorMessage = 'Please fill in all fields correctly.';
      return;
    }

    // const updatedUser: UserDTO = {
    //   id: this.userId, // Récupérez cet ID depuis votre contexte (par ex., route ou sélection)
    //   username: '', // Ajoutez un username par défaut ou modifiez selon votre logique
    //   firstName: this.Form.value.firstName,
    //   lastName: this.Form.value.lastName,
    //   email: this.Form.value.email,
    //   role: this.Form.value.role
    // };

    // this.userService.updateUser(updatedUser, this.userId).subscribe({
    //   next: (response) => {
    //     this.successMessage = 'User updated successfully!';
    //     this.errorMessage = '';
    //     console.log('Updated User:', response);
    //   },
    //   error: (error) => {
    //     this.errorMessage = 'Failed to update user. Please try again.';
    //     this.successMessage = '';
    //     console.error('Error:', error);
    //   }
    // });
  }
}
