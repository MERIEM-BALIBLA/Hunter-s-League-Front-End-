import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Participation {
  userName: string,
  competitionCode: string
}

@Injectable({
  providedIn: 'root'
})
export class ParticipationService {

  private BASE_URL = 'http://localhost:8080/api/participation';
  constructor(private http: HttpClient) { }

  save(data: Participation): Observable<void>{
    console.log('Sending to backend:', data);
    return this.http.post<void>(`${this.BASE_URL}/save`, data)
  }
}
