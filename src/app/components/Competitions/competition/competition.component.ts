import { Component, OnInit } from '@angular/core';
import { CreateCompetitionComponent } from '../create-competition/create-competition.component';
import { CommonModule } from '@angular/common';
import { Competition, CompetitionService } from '../../../service/competition/competition.service';
import { SideComponent } from '../../../components/Admin/Barr/side/side.component';
import { UpdateCompetitionComponent } from '../update-competition/update-competition.component';

@Component({
  selector: 'app-competition',
  standalone: true,
  imports: [CreateCompetitionComponent, CommonModule, SideComponent, UpdateCompetitionComponent],
  templateUrl: './competition.component.html',
  styleUrl: './competition.component.css'
})

export class CompetitionComponent implements OnInit
 {
 competitions: Competition[] = [];
 currentPage = 0;
 pageSize = 4;
 totalPages = 0;
 totalElements = 0;
 protected Math = Math;
 
   constructor(private competitionService: CompetitionService) {}
 
  ngOnInit(): void {
    this.loadCompetition()
  }

  loadCompetition() : void{
    this.competitionService.getCompetitionsList(this.currentPage, this.pageSize).subscribe({
      next: (response) => {
        this.competitions = response.content;
        this.totalPages = response.totalPages;
        this.totalElements = response.totalElements;
        console.log('competitions loaded:', this.competitions);
      },
      error: (error) => {
        console.error('Error fetching competitions:', error);
      }
    });
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadCompetition();
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


 
  onDelete(id: string): void {
    console.log('ID à supprimer:', id); // Vérifier la valeur de l'ID
    this.competitionService.delete(id).subscribe({
      next: () => {
        this.competitions = this.competitions.filter(competition => competition.id !== id);
      },
      error: (error) => {
        console.error('Failed to delete Competition:', error);
      }
    });
  }

   selectedCompetition: Competition | null = null; 
  
  
    onEdit(competition: Competition): void {
      this.selectedCompetition = competition; // Stocke l'espèce sélectionnée
      console.log(competition)
      const modal = document.getElementById('my_modal_1') as HTMLDialogElement;
      if (modal) {
        modal.showModal();
      }
    }
  
}
