import { Component, OnInit } from '@angular/core';
import { RecruteurService } from '../recruteur.service';

@Component({
  selector: 'app-liste-recruteur',
  templateUrl: './liste-recruteur.component.html',
  styleUrls: ['./liste-recruteur.component.css']
})
export class ListeRecruteurComponent implements OnInit{
  liste: any;
  l: any;
  constructor(private recruteurService:RecruteurService){}
  ngOnInit(): void {
    this.recruteurService.getListrecruteur().subscribe(ps=>{  
      this.liste=ps[0]
      this.l=this.liste.length
      console.log(ps)
  })
}
show=false
showUpdate=false
userId: number=0;
showModale(id:number){
  this.show=true
  this.userId=id
console.log(this.show,id)}
actionClose(){
  this.show=false

}
actionSave(){
  this.show=false
  this.recruteurService.getListrecruteur().subscribe(ps=>{  
    this.liste=ps[0]
    this.l=this.liste.length
    console.log(ps)
})
}

} 
