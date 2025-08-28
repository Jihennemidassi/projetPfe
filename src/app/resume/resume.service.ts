import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

   constructor(private http: HttpClient) { }
   createResume(formData: FormData) {
    return this.http.post(
      'http://localhost:3000/resume/upload-resume',
      formData,
      {
        // No Content-Type header needed - browser sets it automatically
        // with the correct boundary
      }
    );
  }
   getListResume():Observable<any>{
     return this.http.get('http://localhost:3000/resume/liste-resume') as Observable<any>
 
   }
   
   getResume(id:Number):Observable<any>
   {console.log(id)
     return this.http.get('http://localhost:3000/resume/resume/'+JSON.stringify(id))
   }
   updateResume(id:number,data:any):Observable<any>{
     console.log(JSON.stringify(id))
     return this.http.patch('http://localhost:3000/resume/update-resume/'+String(id),data) as Observable<any> 
   }
 
 
   deleteResume(id:Number):Observable<any>{
     return this.http.delete('http://localhost:3000/resume/delete-resume/'+JSON.stringify(id)) as Observable<any>
   }

   // resume.service.ts
uploadResume(file: File) {
  const formData = new FormData();
  formData.append('file', file);
  
  return this.http.post('http://localhost:3000/resume/upload-resume', formData, {
    
  });
}
getTopResumeesForPoste(posteId: number): Observable<any[]> {
  return this.http.get<any[]>(`http://localhost:3000/resume/resume-poste/${posteId}`);
}
getResumeByCandidat(candidatId: number): Observable<any> {
  return this.http.get<any>(`http://localhost:3000/resume/resume-by-candidat/${candidatId}`);
}

  
  }
