import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { PageResponse } from '../../core/interface/page-response';

export interface Species {
  id: string;
  name: string;
  category: string;
  minimumWeight: number;
  difficulty: string;
  points: number;
}

@Injectable({
  providedIn: 'root'
})

export class SpeciesService {
  private BASE_URL = 'http://localhost:8080/api/species';

  constructor(private http: HttpClient) { }



  getSpecies(page: number = 0, size: number = 3): Observable<PageResponse<Species>> {  
       return this.http.get<PageResponse<Species>>(`${this.BASE_URL}/list?page=${page}&size=${size}`).pipe(
         tap(data => console.log('Species data:', data))
       );
  }

  save(species: Species): Observable<Species> {
    return this.http.post<Species>(`${this.BASE_URL}/addSpecies`, species).pipe(
      catchError(error => {
        console.error('Error saving species', error);
        return throwError(() => new Error('Error saving species'));
      })
    );
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.BASE_URL}/${id}`);
  }  

}
