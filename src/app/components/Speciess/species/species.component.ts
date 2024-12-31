import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Species, SpeciesService } from '../../../service/species/species.service';
import { CreateSpeciesComponent } from '../create-species/create-species.component';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css'],
  standalone: true,
  imports: [CommonModule, CreateSpeciesComponent]
})
export class SpeciesComponent implements OnInit {
  speciesList: Species[] = []; // Array to hold species data

  constructor(private speciesService: SpeciesService) { }

  ngOnInit(): void {
    this.speciesService.list().subscribe((data: Species[]) => {
      this.speciesList = data; // Assign the fetched data to the speciesList property
    });
  }
}
