import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { combineLatest, filter, from, map, mergeMap, Observable, of } from 'rxjs';

@Component({
  selector: 'app-podium',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './podium.component.html',
  styleUrl: './podium.component.css'
})
export class PodiumComponent implements OnInit {
  combinedValues: [number, string][] = [];

  ngOnInit() {
      const observable1: Observable<number> = of(1, 2, 3, 4);
      const observable2: Observable<string> = of('A', 'B', 'C', 'D');

      const combinedObservable: Observable<[number, string]> = combineLatest(
          observable1,
          observable2
      );

      combinedObservable.subscribe((pair) => {
          this.combinedValues.push(pair);
      });
  }
    
}
