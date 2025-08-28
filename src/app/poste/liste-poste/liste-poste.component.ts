import { Component, OnInit } from '@angular/core';
import { PosteService } from '../poste.service';

@Component({
  selector: 'app-liste-poste',
  templateUrl: './liste-poste.component.html',
  styleUrls: ['./liste-poste.component.css']
})
export class ListePosteComponent implements OnInit {
  liste: any;
  l: any;
  constructor(private posteService: PosteService){}
  ngOnInit(): void {
    this.posteService.getListPoste().subscribe(ps=>{  
      this.liste=ps[0]
      this.l=this.liste.length
      console.log(ps)
    })
  }
  show=false
  showUpdate=false
  posteId: number=0;
   showModale(id:number){
    this.show=true
    this.posteId=id
  console.log(this.show,id)
}
  actionClose(){
    this.show=false
    this.posteService.getListPoste().subscribe(ps=>{
      this.liste=ps[0]
      this.l=this.liste.length
      console.log(ps)
    })
}
actionSave(){
  this.show=false
  this.posteService.getListPoste().subscribe(ps=>{
    this.liste=ps[0]
    this.l=this.liste.length
    console.log(ps)
  })
}
}