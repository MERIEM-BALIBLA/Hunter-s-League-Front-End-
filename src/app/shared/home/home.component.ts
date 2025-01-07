import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateParticipationComponent } from '../../components/Participations/create-participation/create-participation.component';
import { Competition, CompetitionService } from '../../service/competition/competition.service';
import { AuthService } from '../../service/auth/auth.service';
import { UserService } from '../../service/user/user.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CreateParticipationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  competitions: Competition[] = [];

  constructor(private competitionService: CompetitionService, private authService: AuthService, private userService: UserService) {}

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

  getUser(){
    this.userService.getUserInfo();
  }
  
}
