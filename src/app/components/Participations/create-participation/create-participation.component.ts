import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ParticipationService } from '../../../service/participation/participation.service';
import { AuthService } from '../../../service/auth/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-participation',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <form [formGroup]="participationForm" (ngSubmit)="submitParticipation()" class="space-y-4">    
    <input type="hidden" formControlName="competitionCode" class="w-full px-3 py-2 border rounded-md bg-gray-50 text-gray-500" />

    <button
      type="submit" 
      title="Save" class="cursor-pointer flex items-center fill-lime-400 bg-lime-950 hover:bg-lime-900 active:border active:border-lime-400 rounded-md duration-100 p-2">
      <svg viewBox="0 -0.5 25 25" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M18.507 19.853V6.034C18.5116 5.49905 18.3034 4.98422 17.9283 4.60277C17.5532 4.22131 17.042 4.00449 16.507 4H8.50705C7.9721 4.00449 7.46085 4.22131 7.08577 4.60277C6.7107 4.98422 6.50252 5.49905 6.50705 6.034V19.853C6.45951 20.252 6.65541 20.6407 7.00441 20.8399C7.35342 21.039 7.78773 21.0099 8.10705 20.766L11.907 17.485C12.2496 17.1758 12.7705 17.1758 13.113 17.485L16.9071 20.767C17.2265 21.0111 17.6611 21.0402 18.0102 20.8407C18.3593 20.6413 18.5551 20.2522 18.507 19.853Z" clip-rule="evenodd" fill-rule="evenodd"></path>
      </svg>
      <span class="text-sm text-lime-400 font-bold pr-1">Participate</span>
    </button>

    <div *ngIf="errors.length > 0" class="mt-2 space-y-1">
      <div *ngFor="let error of errors" class="text-sm text-red-600">{{ error }}</div>
    </div>
</form>

  `
})
export class CreateParticipationComponent implements OnInit {
  @Input() competitionCode!: string;
  
  participationForm: FormGroup;
  isSubmitting = false;
  errors: string[] = [];

  constructor(
    private service: ParticipationService,
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.participationForm = this.fb.group({
      competitionCode: ['', Validators.required],
    });
  }

  ngOnInit(): void {

    // Initialiser le formulaire avec les valeurs correctes
    this.participationForm.patchValue({
      competitionCode: this.competitionCode,
    });

    console.log('Form after patching:', this.participationForm.value);  // Vérifiez si les valeurs sont bien patchées
  }

  isValid(): boolean {
    // Vérifiez la validité du formulaire
    const isValidForm = this.participationForm.valid;
    console.log('Form is valid:', isValidForm);  // Log pour vérifier la validité du formulaire
    return isValidForm;
  }

  submitParticipation(): void {
    if (!this.isValid() || this.isSubmitting) return;

    this.isSubmitting = true;
    this.errors = [];

    console.log('Submitting form data:', this.participationForm.value);  // Log pour vérifier les données soumises

    this.service.save(this.participationForm.value).subscribe({
      next: () => {
        this.isSubmitting = false;
        window.location.reload();
      },
      // error: (error) => {
      //   this.isSubmitting = false;
      //   this.errors = error?.errors || ['An error occurred while joining the competition'];
      // }
    });
  }
}
   // <button type="submit" 
    //         [disabled]="!isValid() || isSubmitting"
    //         class="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent 
    //                rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 
    //                hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
    //                focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed">
    //   <span *ngIf="!isSubmitting">Participate</span>
    //   <span *ngIf="isSubmitting">done</span>
    // </button>