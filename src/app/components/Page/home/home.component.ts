import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Competition, CompetitionService } from '../../../service/competition/competition.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
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
}