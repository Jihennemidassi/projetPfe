import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
    createPoste(data:any):Observable<any>{
      return this.http.post('http://localhost:3000/poste/create-poste/',data) as Observable<any>
  
    }
    getListUser():Observable<any>{
      return this.http.get('http://localhost:3000/user/liste-user') as Observable<any>
  
    }
    getPoste(id:Number):Observable<any>
    {console.log(id)
      return this.http.get('http://localhost:3000/poste/poste/'+JSON.stringify(id))
    }
    updatePoste(id:number,data:any):Observable<any>{
      console.log(JSON.stringify(id))
      return this.http.patch('http://localhost:3000/poste/update-poste/'+String(id),data) as Observable<any> 
    }
 
  
    deletePoste(id:Number):Observable<any>{
      return this.http.delete('http://localhost:3000/poste/delete-poste/'+JSON.stringify(id)) as Observable<any>
    }
}
