import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../service/user/user.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  sittingsForm : FormGroup;
  isSubmit: boolean=false;
  errorMessage : string = "";

  constructor(
     private fb: FormBuilder,
      private authService: UserService,
  ){
    this.sittingsForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      nationality: ['', Validators.required],
      cin: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPass: ['', Validators.required, Validators.minLength(8)],
      
    })
  }

  onSubmit(){}
}
