import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

export interface UserDTO {
  id: string; 
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  nationality: string;
  cin: string;
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

  // user.service.ts
  getUsers(page: number = 0, size: number = 3): Observable<PageResponse<UserDTO>> {  // Changé size=10 à size=3
    return this.http.get<PageResponse<UserDTO>>(`${this.BASE_URL}/list?page=${page}&size=${size}`).pipe(
      tap(data => console.log('Users data:', data))
    );
  }

 
  updateUserRole(role: string, id: string): Observable<UserDTO> {
    if (!id) {
        throw new Error('User ID is required');
    }
    console.log(`Sending PUT request to update role to '${role}' for user ID: ${id}`);
    return this.http.put<UserDTO>(`${this.BASE_URL}/${id}/role`, { role: role });
  }

  deleteUser(id: string): Observable<void>{
    if(!id){
      throw new Error('User ID is required');
    }
    console.log("id: "+id);
    return this.http.delete<void>(`${this.BASE_URL}/${id}`);
  }

  getUserInfo(): Observable<UserDTO> {
    return this.http.get<UserDTO>(`${this.BASE_URL}/profile`).pipe(
      tap(user => console.log('User Data:', user))
    );
  }

  updateUser(data: UserDTO, id: string): Observable<UserDTO> {
    return this.http.put<UserDTO>(`${this.BASE_URL}/${id}`, data);
  }
  
}