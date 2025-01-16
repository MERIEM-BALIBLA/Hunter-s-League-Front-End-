import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ParticipationService, Podium } from '../../service/participation/participation.service';

@Component({
  selector: 'app-podium',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './podium.component.html',
  styleUrl: './podium.component.css'
})
export class PodiumComponent implements OnInit {
  PodiumList: Podium[] = []
  
  constructor(private service: ParticipationService ){}

    
  loadPodium(){
    return this.service.getPodium().subscribe(
     {
      next: (data: Podium[]) => {
        this.PodiumList = data; // Assign fetched data to PodiumList
      },
      error: (err) => {
        console.error('Error loading podium data:', err); // Log errors if any
      }
     }
    );
  }
  ngOnInit(): void {
    this.loadPodium(); // Call loadPodium on component initialization
  }


}
