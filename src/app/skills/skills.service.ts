import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private apiUrl = 'http://localhost:3000/skills'; // Adjust if needed

  constructor(private http: HttpClient) {}


  createSkill(skillData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create-skill`, skillData);
  }

  getAllSkills(): Observable<any> {
    return this.http.get(`${this.apiUrl}/liste-skill`);
  }


  getSkillById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/skill/${id}`);
  }

  updateSkill(id: number, skillData: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/update-skill/${id}`, skillData);
  }

  deleteSkill(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete-skill/${id}`);
  }
}
