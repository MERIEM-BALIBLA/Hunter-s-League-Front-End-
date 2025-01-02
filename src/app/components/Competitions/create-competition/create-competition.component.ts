import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CompetitionService } from '../../../service/competition/competition.service';
import { CommonModule } from '@angular/common';
import { SpeciesService } from '../../../service/species/species.service';

@Component({
  selector: 'app-create-competition',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-competition.component.html',
  styleUrl: './create-competition.component.css'
})
export class CreateCompetitionComponent {

    Form: FormGroup;
    isSubmit = false;
    speciesList: any[] = []; 
    errorMessage = '';
    successMessage = ''; 

    constructor(
      private fb: FormBuilder,
      private service: CompetitionService,
      private speciesService: SpeciesService
    ){
    
      this.Form = this.fb.group({
        location: ['', [Validators.required, Validators.minLength(4)]],
        date: ['', [Validators.required]],
        speciesType: ['', [Validators.required]],
        maxParticipants: ['', [Validators.required, Validators.min(2)]],
        minParticipants: ['', [Validators.required, Validators.min(2)]]
      })
    }

    onSubmit(): void {
      if (this.Form.valid) {
        this.isSubmit = true;
        this.service.save(this.Form.value).subscribe({
          next: () => {
            this.isSubmit = false;
            this.successMessage = 'competition added successfully!'; 
            this.errorMessage = ''; 
  
            const modal = document.getElementById('my_modal_4') as HTMLInputElement;
            if (modal) modal.checked = false; 
  
            this.Form.reset();
          },
          error: (error) => {
            this.isSubmit = false;
            this.errorMessage = 'Failed to add competition';
            this.successMessage = ''; 
            console.error('Failed to add competition', error);
          }
        });
      } else {
        this.errorMessage = 'Please fill in all required fields correctly.';
        this.successMessage = ''; 
      }
    }
    
}
