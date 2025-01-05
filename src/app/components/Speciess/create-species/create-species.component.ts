import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SpeciesService } from '../../../service/species/species.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-species',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-species.component.html',
  styleUrls: ['./create-species.component.css']
})
export class CreateSpeciesComponent {
  Form: FormGroup;
  isSubmitting = false;
  errorMessage = '';
  successMessage = ''; 

  constructor(
    private fb: FormBuilder,
    private speciesService: SpeciesService,
  ) {
    this.Form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      category: ['', Validators.required],
      minimumWeight: ['', [Validators.required, Validators.min(0)]],
      difficulty: ['', Validators.required],
      points: ['', Validators.min(0)],
    });
  }

  onSubmit(): void {
    if (this.Form.valid) {
      this.isSubmitting = true;
      this.speciesService.save(this.Form.value).subscribe({
        next: () => {
          this.isSubmitting = false;
          this.successMessage = 'Species added successfully!'; // Message de succès
          this.errorMessage = ''; // Réinitialiser le message d'erreur si la soumission est réussie

          // Fermer la modale après une soumission réussie
          const modal = document.getElementById('my_modal_6') as HTMLInputElement;
          if (modal) modal.checked = false; // Cela ferme la modale en décochant la case

          // Réinitialiser le formulaire
          this.Form.reset();
        },
        error: (error) => {
          this.isSubmitting = false;
          this.errorMessage = 'Failed to add species';
          this.successMessage = ''; // Réinitialiser le message de succès si une erreur se produit
          console.error('Failed to add species', error);
        }
      });
    } else {
      this.errorMessage = 'Please fill in all required fields correctly.';
      this.successMessage = ''; // Réinitialiser le message de succès si la soumission échoue
    }
  }

  onCancel(): void {
    const modal = document.getElementById('my_modal_6') as HTMLInputElement;
    if (modal) modal.checked = false;
  }
}
