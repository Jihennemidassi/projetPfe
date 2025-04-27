import { Component, OnInit } from '@angular/core';
import { CandidatService } from '../candidat.service';
@Component({
  selector: 'app-liste-candidat',
  templateUrl: './liste-candidat.component.html',
  styleUrls: ['./liste-candidat.component.css']
})
export class ListeCandidatComponent implements OnInit {
  liste: any;
  l: any;
constructor(private CandidatService:CandidatService){

}
ngOnInit(): void {
 this.CandidatService.getListcandidat().subscribe(ps=>{  
  this.liste=ps[0]
  this.l=this.liste.length
  console.log(ps)
}

 )
}
  show=false
  showUpdate=false
  candidatId: number=0;
  showModale(id:number){
    this.show=true
    this.candidatId=id
  console.log(this.show,id)
}
  actionClose(){
    this.show=false
    console.log("hello event")
     this.CandidatService.getListcandidat().subscribe(ps=>{  
  this.liste=ps[0]
  this.l=this.liste.length
  console.log(ps)
     })
}
actionSave(){
  this.show=false
  this.CandidatService.getListcandidat().subscribe(ps=>{  
    this.liste=ps[0]
    this.l=this.liste.length
    console.log(ps)
})
}

}
