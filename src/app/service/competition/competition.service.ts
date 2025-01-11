import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { PageResponse } from '../../core/interface/page-response';

export interface Competition {
  id: string;
  code: string;
  location: string;
  date: string;
  speciesType: string;
  maxParticipants: number;
  minParticipants: number;
  openRegistration: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

 private BASE_URL = 'http://localhost:8080/api/competitions';
 
   constructor(private http: HttpClient) { }
 
   getCompetitions(): Observable<Competition[]> {
     return this.http.get<{ content: Competition[] }>(`${this.BASE_URL}/list`).pipe(
       map(response => response.content),
       tap(data => console.log('Competition list data:', data))
     );
   }

   getCompetitionsList(page: number = 0, size: number = 3): Observable<PageResponse<Competition>> {  // Changé size=10 à size=3
       return this.http.get<PageResponse<Competition>>(`${this.BASE_URL}/list?page=${page}&size=${size}`).pipe(
         tap(data => console.log('Competition data:', data))
       );
    }

  save(data: Competition): Observable<Competition>{
    console.log(data);
    return this.http.post<Competition>(`${this.BASE_URL}/create`, data)
    .pipe(
          catchError(error => {
            console.error('Error saving species', error);
            return throwError(() => new Error('Error saving species'));
          })
        );
   }

  delete(id: string): Observable<void> {
    if (!id) {
      console.error('ID invalide:', id);
      return throwError(() => new Error('ID invalide'));
    }
    console.log('Suppression de l\'élément avec ID:', id);
    return this.http.delete<void>(`${this.BASE_URL}/${id}`);
  }
  
    update(competition: Competition, id: string): Observable<Competition> {
      return this.http.put<Competition>(`${this.BASE_URL}/${id}`, competition).pipe(
        catchError((error) => {
          console.error('Erreur lors de la mise à jour de la competition :', error);
          return throwError(() => error); 
        })
      );
    }
  
}
