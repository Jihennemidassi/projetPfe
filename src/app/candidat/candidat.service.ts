import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  constructor(private http: HttpClient) { }
  createCandidat(data:any):Observable<any>{
    return this.http.post('http://localhost:3000/candidat/create-candidat/',data) as Observable<any>

  }
  getListecandidat():Observable<any>{
    return this.http.get('http://localhost:3000/candidat/liste-candidat') as Observable<any>

  }
  getCandidat(id:Number):Observable<any>
  {console.log(id)
    return this.http.get('http://localhost:3000/candidat/candidat/'+JSON.stringify(id))
  }
  updateCandidat(id:number,data:any):Observable<any>{
    console.log(JSON.stringify(id))
    return this.http.patch('http://localhost:3000/candidat/update-candidat/'+String(id),data) as Observable<any> 
  }


  deleteCandidat(id:Number):Observable<any>{
    return this.http.delete('http://localhost:3000/candidat/delete-candidat/'+JSON.stringify(id)) as Observable<any>
  }
}
