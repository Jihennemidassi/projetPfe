import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private apiUrl = 'http://localhost:3000/experience';
    constructor(private http: HttpClient) {}
  
  
    createExperience(ExperienceData: any): Observable<any> {
      return this.http.post(`${this.apiUrl}/create-experience`, ExperienceData);
    }
  
    getAllExperiences(): Observable<any> {
      return this.http.get(`${this.apiUrl}/list-experience`);
    }
  
  
    getExperienceById(id: number): Observable<any> {
      return this.http.get(`${this.apiUrl}/experience/${id}`);
    }
  
    updateExperience(id: number, ExperienceData: any): Observable<any> {
      return this.http.patch(`${this.apiUrl}/update-experience/${id}`, ExperienceData);
    }
  
    deleteExperience(id: number): Observable<any> {
      return this.http.delete(`${this.apiUrl}/delete-experience/${id}`);
    }
}
