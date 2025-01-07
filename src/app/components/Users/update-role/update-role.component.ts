
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../service/user/user.service';

@Component({
  selector: 'app-update-role',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './update-role.component.html',
  styleUrl: './update-role.component.css'
})
export class UpdateRoleComponent implements OnInit {
  @Input() userId: string = '';  
  @Input() currentRole: string = '';  
  @Output() roleUpdated = new EventEmitter<void>();
  userRoleForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.userRoleForm = this.fb.group({
      role: ['', Validators.required] 
    });
  }

  ngOnInit() {
    this.userRoleForm.patchValue({
      role: this.currentRole
    });
  }

  updateRole(): void {
    if (this.userRoleForm.valid && this.userId) {
      const newRole = this.userRoleForm.value.role;
      this.userService.updateUserRole(newRole, this.userId).subscribe({
        next: (updatedUser) => {
          console.log('Rôle mis à jour:', updatedUser);
          const modal = document.getElementById('my_modal_1') as HTMLDialogElement;
          if (modal) modal.close();
          this.roleUpdated.emit(); // Emit event after successful update
        },
        error: (err) => {
          console.error('Erreur lors de la mise à jour du rôle', err);
        }
      });
    }
  }

  close(){
    const modal = document.getElementById('my_modal_1') as HTMLDialogElement;
    if (modal) modal.close();
  }
}

