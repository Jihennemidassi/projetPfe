import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  private apiUrl = 'http://localhost:3000/education'; // Adjust if needed
 
   constructor(private http: HttpClient) {}
 
 
   createEducation(educationData: any): Observable<any> {
     return this.http.post(`${this.apiUrl}/create-education`, educationData);
   }
 
   getAllEducations(): Observable<any> {
     return this.http.get(`${this.apiUrl}/list-education`);
   }
 
 
   getEducationById(id: number): Observable<any> {
     return this.http.get(`${this.apiUrl}/education/${id}`);
   }
 
   updateEducation(id: number, educationData: any): Observable<any> {
     return this.http.patch(`${this.apiUrl}/update-education/${id}`, educationData);
   }
 
   deleteEducation(id: number): Observable<any> {
     return this.http.delete(`${this.apiUrl}/delete-education/${id}`);
   }
}
