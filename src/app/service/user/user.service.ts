import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

export interface UserDTO {
  id: string;  // Pour UUID
  username: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface PageResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private BASE_URL = 'http://localhost:8080/api/users';
 
  constructor(private http: HttpClient) { }
 
  getUsers(page: number = 0, size: number = 10): Observable<UserDTO[]> {
    return this.http.get<PageResponse<UserDTO>>(`${this.BASE_URL}/list?page=${page}&size=${size}`).pipe(
      map(response => response.content),
      tap(data => console.log('Users data:', data))
    );
  }
}