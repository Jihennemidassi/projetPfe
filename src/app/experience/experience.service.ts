import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private apiUrl = 'http://localhost:3000/experience'; // Adjust if needed
  
    constructor(private http: HttpClient) {}
  
  
    createExperience(experienceData: any): Observable<any> {
      return this.http.post(`${this.apiUrl}/create-experience`, experienceData);
    }
  
    getAllExperiences(): Observable<any> {
      return this.http.get(`${this.apiUrl}/liste-experience`);
    }
  
  
    getExperienceById(id: number): Observable<any> {
      return this.http.get(`${this.apiUrl}/experience/${id}`);
    }
  
    updateExperience(id: number, experienceData: any): Observable<any> {
      return this.http.patch(`${this.apiUrl}/update-experience/${id}`, experienceData);
    }
  
    deleteExperience(id: number): Observable<any> {
      return this.http.delete(`${this.apiUrl}/delete-experience/${id}`);
    }
  }
