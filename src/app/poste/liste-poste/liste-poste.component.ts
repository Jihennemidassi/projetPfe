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
  userId: number=0;
  showModale(){
    this.show=true  
}
actionClose(){
  this.show=false

}
}
