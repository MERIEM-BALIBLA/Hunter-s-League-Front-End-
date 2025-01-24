// import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { CreateSpeciesComponent } from '../create-species/create-species.component';
// import { Species, SpeciesService } from '../../../service/species/species.service';
// import { UpdateSpeciesComponent } from '../update-species/update-species.component';
// import { SideComponent } from '../../Admin/Barr/side/side.component';

// @Component({
//   selector: 'app-species',
//   templateUrl: './species.component.html',
//   styleUrls: ['./species.component.css'],
//   standalone: true,
//   imports: [CommonModule, CreateSpeciesComponent, UpdateSpeciesComponent, SideComponent]
// })
// export class SpeciesComponent implements OnInit {
//   speciesList: Species[] = []; 
//   currentPage = 0;
//   pageSize = 7;
//   totalPages = 0;
//   totalElements = 0;
//   protected Math = Math;

//   @Output() speciesSelected = new EventEmitter<Species>();

//   constructor(private speciesService: SpeciesService) { }

//   ngOnInit(): void {
//     this.loadSpecies();
//     // Composant parent

//   }

//   loadSpecies(): void {
//       this.speciesService.getSpecies(this.currentPage, this.pageSize).subscribe({
//         next: (response) => {
//           this.speciesList = response.content;
//           this.totalPages = response.totalPages;
//           this.totalElements = response.totalElements;
//           console.log('competitions loaded:', this.speciesList);
//         },
//         error: (error) => {
//           console.error('Error fetching competitions:', error);
//         }
//       });
//     }

//   onPageChange(page: number): void {
//       this.currentPage = page;
//       this.loadSpecies();
//     }
  
//     get visiblePages(): number[] {
//       const maxPages = 5;
//       if (this.totalPages <= maxPages) {
//         return Array(this.totalPages).fill(0).map((_, i) => i);
//       }
  
//       let start = Math.max(0, this.currentPage - Math.floor(maxPages / 2));
//       let end = Math.min(this.totalPages - 1, start + maxPages - 1);
  
//       if (end - start + 1 < maxPages) {
//         start = Math.max(0, end - maxPages + 1);
//       }
  
//       return Array(end - start + 1).fill(0).map((_, i) => start + i);
//     }

//     onDelete(id: string): void {
//       if (confirm('Êtes-vous sûr de vouloir supprimer cette espèce ?')) {
//         this.speciesService.delete(id).subscribe({
//           next: () => {
//             this.speciesList = this.speciesList.filter(species => species.id !== id);
    
//             if (this.speciesList.length === 0 && this.currentPage > 0) {
//               this.currentPage--;
//             }
    
//             this.loadSpecies();
//           },
//           error: (error) => {
//             console.error('Erreur lors de la suppression de l\'espèce :', error);
//           }
//         });
//       }
//     }
    
//   selectedSpecies: Species | null = null; 


//   onEdit(species: Species): void {
//     this.selectedSpecies = species; // Stocke l'espèce sélectionnée
//     console.log(species)
//     const modal = document.getElementById('my_modal_1') as HTMLDialogElement;
//     if (modal) {
//       modal.showModal();
//     }
//   }


// }

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { CreateSpeciesComponent } from '../create-species/create-species.component';
import { Species, SpeciesService } from '../../../service/species/species.service';
import { UpdateSpeciesComponent } from '../update-species/update-species.component';
import { SideComponent } from '../../Admin/Barr/side/side.component';
import { Observable } from 'rxjs';
import { selectAllSpecies, selectSpeciesLoading, selectSpeciesError } from '../../../store/species/species.selectors';
import { loadSpecies } from '../../../store/species/species.actions';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css'],
  standalone: true,
  imports: [CommonModule, CreateSpeciesComponent, UpdateSpeciesComponent, SideComponent]
})
export class SpeciesComponent implements OnInit {
  speciesList$: Observable<Species[]>;
  loading$: Observable<boolean>;
  error$: Observable<any>;
  
  currentPage = 0;
  pageSize = 7;
  totalPages = 0;
  totalElements = 0;
  protected Math = Math;

  @Output() speciesSelected = new EventEmitter<Species>();
  selectedSpecies: Species | null = null;

  constructor(private store: Store, private speciesService: SpeciesService) {
    // Initialize selectors
    this.speciesList$ = this.store.select(selectAllSpecies);
    this.loading$ = this.store.select(selectSpeciesLoading);
    this.error$ = this.store.select(selectSpeciesError);
  }

  ngOnInit(): void {
    this.loadSpecies();
  }

  loadSpecies(): void {
    // Dispatch the loadSpecies action directly
    this.store.dispatch(loadSpecies({ page: this.currentPage, size: this.pageSize }));
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

    //   onDelete(id: string): void {
    //   if (confirm('Êtes-vous sûr de vouloir supprimer cette espèce ?')) {
    //     this.speciesService.delete(id).subscribe({
    //       next: () => {
    //         this.speciesList$ = this.speciesList$.filter(species => species.id !== id);
    
    //         if (this.speciesList$.length === 0 && this.currentPage > 0) {
    //           this.currentPage--;
    //         }
    
    //         this.loadSpecies();
    //       },
    //       error: (error) => {
    //         console.error('Erreur lors de la suppression de l\'espèce :', error);
    //       }
    //     });
    //   }
    // }

  onEdit(species: Species): void {
    this.selectedSpecies = species;
    const modal = document.getElementById('my_modal_1') as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  }
}