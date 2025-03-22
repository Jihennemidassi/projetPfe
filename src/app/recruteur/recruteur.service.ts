import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RecruteurService {

  constructor(private http:HttpClient) { }
  createRecruteur(data:any):Observable<any>{
    return this.http.post('http://localhost:3000/recruteur/create-recruteur/',data) as Observable<any>

  }
  getListrecruteur():Observable<any>{
    return this.http.get('http://localhost:3000/recruteur/liste-recruteur') as Observable<any>

  }
  getRecruteur(id:Number):Observable<any>
  {console.log(id)
    return this.http.get('http://localhost:3000/recruteur/recruteur/'+JSON.stringify(id))
  }
  updateRecruteur(id:number,data:any):Observable<any>{
    console.log(JSON.stringify(id))
    return this.http.patch('http://localhost:3000/recruteur/update-recruteur/'+String(id),data) as Observable<any> 
  }


  deleteRecruteur(id:Number):Observable<any>{
    return this.http.delete('http://localhost:3000/recruteur/delete-recruteur/'+JSON.stringify(id)) as Observable<any>
  }
}
