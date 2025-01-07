import { Component, OnInit } from '@angular/core';
import { Species, SpeciesService } from '../../service/species/species.service';

@Component({
  selector: 'app-species-page',
  standalone: true,
  imports: [],
  templateUrl: './species-page.component.html',
  styleUrl: './species-page.component.css'
})
export class SpeciesPageComponent implements OnInit{

  species : Species[] = [];
  currentPage = 0;
  pageSize = 4;
  totalPages = 0;
  totalElements = 0;
  protected Math = Math;

  constructor(private service:SpeciesService){}

  ngOnInit(): void {
    this.loadSpecies();
  }

  loadSpecies():void{
    this.service.getSpecies(this.currentPage, this.pageSize).subscribe({
      next: (response) => {
        this.species = response.content;
        this.totalPages = response.totalPages;
        this.totalElements = response.totalElements;
      }
    })
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadSpecies();
  }

  get visiblePages(): number[] {
    const maxPages = 5;
    if (this.totalPages <= maxPages) {
      return Array(this.totalPages).fill(0).map((_, i) => i);
    }

    let start = Math.max(0, this.currentPage - Math.floor(maxPages / 2));
    let end = Math.min(this.totalPages - 1, start + maxPages - 1);

    if (end - start + 1 < maxPages) {
      start = Math.max(0, end - maxPages + 1);
    }

    return Array(end - start + 1).fill(0).map((_, i) => start + i);
  }
}
