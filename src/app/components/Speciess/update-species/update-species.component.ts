import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-species',
  standalone: true,
  imports: [ReactiveFormsModule, UpdateSpeciesComponent],
  templateUrl: './update-species.component.html',
  styleUrl: './update-species.component.css'
})
export class UpdateSpeciesComponent {

}
