import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Participation {
  competitionCode: string
}

export interface Podium {
  userName: string
  competitionLocation: string
  score: number
}

@Injectable({
  providedIn: 'root'
})
export class ParticipationService {

  private BASE_URL = 'http://localhost:8080/api/participation';
  constructor(private http: HttpClient) { }

  save(data: Participation): Observable<void>{
    console.log('Sending to backend:', data);
    return this.http.post<void>(`${this.BASE_URL}/create`, data)
  }

  getPodium(): Observable<Podium[]>{
     return this.http.get<Podium[]>(`${this.BASE_URL}/podium`)
  }
}
