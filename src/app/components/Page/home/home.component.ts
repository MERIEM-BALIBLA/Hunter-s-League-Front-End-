import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Competition, CompetitionService } from '../../../service/competition/competition.service';
import { AuthService } from '../../../service/auth/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  competitions: Competition[] = [];

  constructor(private competitionService: CompetitionService, private authService: AuthService) {}

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

// import { Router } from '@angular/router';
// import { Observable } from 'rxjs';

// @Component({
//   selector: 'app-home',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './home.component.html',
//   styleUrl: './home.component.css'
// })
// export class HomeComponent implements OnInit {
//   competitions: Competition[] = [];
//   isLoggedIn$: Observable<boolean>;
//   userRole: string | null = null;

//   constructor(
//     private competitionService: CompetitionService,
//     private authService: AuthService,
//     private router: Router // Inject the router
//   ) {
//     this.isLoggedIn$ = this.authService.isLoggedIn$;
//     this.userRole = this.authService.getUserRole();
//   }

//   ngOnInit() {
//     this.competitionService.getCompetitions().subscribe({
//       next: (data) => {
//         this.competitions = data;
//       },
//       error: (error) => {
//         console.error('Error fetching competitions:', error);
//       }
//     });
//   }

//   canParticipate(): boolean {
//     return this.userRole === 'MEMBER';
//   }

//   participate(competitionId: number) {
//     if (this.authService.isLoggedIn$) {
//       if (this.canParticipate()) {
//         // Logique de participation pour un utilisateur authentifié
//         console.log('Participating in competition:', competitionId);
//       } else {
//         console.log('User does not have permission to participate.');
//       }
//     } else {
//       // Rediriger vers la page d'inscription si l'utilisateur n'est pas connecté
//       this.router.navigate(['/register']);
//     }
//   }
// }
