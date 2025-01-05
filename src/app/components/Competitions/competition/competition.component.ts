// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CreateCompetitionComponent } from '../create-competition/create-competition.component';
import { CommonModule } from '@angular/common';
import { Competition, CompetitionService } from '../../../service/competition/competition.service';
import { SideComponent } from '../../Admin/Barr/side/side.component';

@Component({
  selector: 'app-competition',
  standalone: true,
  imports: [CreateCompetitionComponent, CommonModule, SideComponent],
  templateUrl: './competition.component.html',
  styleUrl: './competition.component.css'
})

export class CompetitionComponent implements OnInit
 {
 competitions: Competition[] = [];
 
   constructor(private competitionService: CompetitionService) {}
 
   ngOnInit() {
     this.competitionService.getCompetitions().subscribe({
       next: (data) => {
         this.competitions = data;
       },
       error: (error) => {
         console.error('Error fetching competitions:', error);
       }
     });
   }

 
  onDelete(id: string): void {
    console.log('ID à supprimer:', id); // Vérifier la valeur de l'ID
    this.competitionService.delete(id).subscribe({
      next: () => {
        this.competitions = this.competitions.filter(competition => competition.id !== id);
      },
      error: (error) => {
        console.error('Failed to delete species:', error);
      }
    });
  }
  
}
