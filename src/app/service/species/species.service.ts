import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export interface Species {
  name: string;
  category: string;
  minimumWeight: string;
  difficulty: string;
  points: number;
}

@Injectable({
  providedIn: 'root'
})

export class SpeciesService {
  private BASE_URL = 'http://localhost:8080/api/species';

  constructor(private http: HttpClient) { }

  list(): Observable<Species[]> {
    return this.http.get<{ content: Species[] }>(`${this.BASE_URL}/list`).pipe(
      map(response => response.content),
      tap(data => console.log('Species list data:', data))
    );
  }

  save(data: Species): Observable<void> {
    console.log('Sending to backend:', data);
    return this.http.post<void>(`${this.BASE_URL}/addSpecies`, data).pipe(
        tap(response => console.log('Backend response:', response))
    );
}

}
