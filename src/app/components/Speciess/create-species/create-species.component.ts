import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SpeciesService } from '../../../service/species/species.service';
import { Router } from '@angular/router';
import { UpdateSpeciesComponent } from '../update-species/update-species.component';

@Component({
  selector: 'app-create-species',
  standalone: true,
  imports: [ReactiveFormsModule, UpdateSpeciesComponent],
  templateUrl: './create-species.component.html',
  styleUrl: './create-species.component.css'
})
export class CreateSpeciesComponent {
    Form: FormGroup;
    isSubmitting = false;
    errorMessage = '';

    constructor(
        private fb: FormBuilder,
        private specieService: SpeciesService,
        private router: Router
    )
      {
          this.Form = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(3)]],
            category: [''],  // Add the 'category' control here
            minimumWeight: ['', Validators.required],
            difficulty: ['', Validators.required],
            points: [''],
          });
        }
      
        onSubmit() {
          if (this.Form.valid) {
              const formData = {
                  ...this.Form.value,
                  minimumWeight: Number(this.Form.value.minimumWeight),
                  points: Number(this.Form.value.points)
              };
      
              this.specieService.save(formData).subscribe({
                  next: () => {
                      this.router.navigate(['/species']);
                      // Close modal
                      document.getElementById('my_modal_6')?.click();
                  },
                  error: (error) => {
                      console.error('Error response:', error);
                      this.errorMessage = error.error?.message || 'Failed to create species';
                  }
              });
          }
      }
      
}
