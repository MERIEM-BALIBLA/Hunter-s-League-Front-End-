// import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-competition',
  standalone: true,
  imports: [],
  templateUrl: './competition.component.html',
  styleUrl: './competition.component.css'
})
export class CompetitionComponent 
// implements OnInit
 {
  // http = inject(HttpClient);
  // competitions: any = [];

  // ngOnInit(): void {

  // }

  // fetchCompetitions() {
  //   this.http.get<any[]>('https://localhost:8080/api/competitions/list')
  //     .subscribe((competitions: any) =>{
  //       console.log(competitions)
  //     });
  // }
}
