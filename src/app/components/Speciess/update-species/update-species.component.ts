import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Species, SpeciesService } from '../../../service/species/species.service';

@Component({
  selector: 'app-update-species',
  templateUrl: './update-species.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class UpdateSpeciesComponent implements OnChanges {
  @Input() species: Species | null = null;
  @Output() speciesUpdated = new EventEmitter<void>();
  
  updateForm: FormGroup;

  constructor(private fb: FormBuilder, private speciesService: SpeciesService) {
    this.updateForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      minimumWeight: ['', [Validators.required, Validators.min(0)]], // Adding a minimum value check
      difficulty: ['', Validators.required],
      points: ['', [Validators.required, Validators.min(0)]], // Adding a minimum value check
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['species'] && this.species) {
      console.log('Species changed:', this.species); // Debugging line
      this.updateForm.patchValue({
        name: this.species.name,
        category: this.species.category,
        minimumWeight: this.species.minimumWeight,
        difficulty: this.species.difficulty,
        points: this.species.points
      });
      this.updateForm.updateValueAndValidity();
    }
  }
  
  onSubmit(): void {
    if (this.updateForm.valid && this.species && this.species.id) {
      const updatedSpecies = {
        ...this.species, // Spread the current species object to keep the original data
        ...this.updateForm.value // Overwrite with updated form values
      };
      console.log(this.updateForm.value)
      // Call the service to update the species
      this.speciesService.update(updatedSpecies, this.species.id).subscribe({
        next: () => {
          // Close the modal after a successful update
          const modal = document.getElementById('my_modal_1') as HTMLDialogElement;
          if (modal) {
            modal.close();
          }
          this.speciesUpdated.emit(); // Emit event to notify parent component
          this.updateForm.reset(); // Reset the form after submission
        },
        error: (error) => {
          console.error('Erreur lors de la mise à jour:', error);
          // Handle error: You can show an error notification here
        }
      });
    }
  }
}
