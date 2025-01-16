import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { Hunt } from '../../core/interface/hunt';

@Injectable({
  providedIn: 'root'
})
export class HuntService {

  private Base_URL = "http://localhost:8080/api/hunt";
  constructor(private http: HttpClient) { }

  // getHunt(): Observable<Hunt[]>{
  //   return this.http.get<{content: Hunt[]}>(`${this.Base_URL}/list`).pipe(
  //     map(resp => resp.content),
  //     tap(data => console.log("data: ", data))

  //   )
  // }

  getHunt(page: number, size: number): Observable<{ content: Hunt[], totalPages: number }> {
    return this.http.get<{ content: Hunt[], totalPages: number }>(`${this.Base_URL}/list?page=${page}&size=${size}`).pipe(
      catchError((error) => {
        console.error('Error occurred while fetching hunts:', error);
        return throwError(() => error);  // Propagate error
      })
    );
  }
  

  saveHunt(data: Hunt): Observable<Hunt> {
    return this.http.post<Hunt>(`${this.Base_URL}/create`, data).pipe(
      catchError((error) => {
        console.error('Error occurred while saving the hunt:', error);
        return throwError(() => error); 
      })
    );
  }
  
 
}
