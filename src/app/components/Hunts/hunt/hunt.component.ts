import { Component, OnInit } from '@angular/core';
import { Hunt } from '../../../core/interface/hunt';
import { HuntService } from '../../../service/hunt/hunt.service';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, switchMap } from 'rxjs';
import { CreateHuntComponent } from '../create-hunt/create-hunt.component';

@Component({
  selector: 'app-hunt',
  standalone: true,
  imports: [CommonModule, CreateHuntComponent],
  templateUrl: './hunt.component.html',
  styleUrl: './hunt.component.css'
})
export class HuntComponent implements OnInit{

   HuntList : Hunt[] = []
   currentPage = new BehaviorSubject<number>(0); 

   totalPages: number = 0; 
   pageSize: number = 10; 
   
   showAddModal: boolean = false; 

    constructor(private service: HuntService){}



  ngOnInit(): void {
    this.currentPage.pipe(

      switchMap(page => {
        return this.service.getHunt(page, this.pageSize);
      })
    ).subscribe(response => {
      this.HuntList = response.content; 
      this.totalPages = response.totalPages; 
    });
  }


  nextPage(): void {
    if (this.currentPage.value < this.totalPages - 1) {
      this.currentPage.next(this.currentPage.value + 1); 
    }
  }

  previousPage(): void {
    if (this.currentPage.value > 0) {
      this.currentPage.next(this.currentPage.value - 1); 
    }
  }

  openAddModel(): void {
    this.showAddModal = true; // Show the modal
  }

  closeAddModel(): void {
    this.showAddModal = false; // Close the modal
  }

  openEditModel(){

  }
}
