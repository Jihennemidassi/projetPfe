import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-liste-resume',
  templateUrl: './liste-resume.component.html',
  styleUrls: ['./liste-resume.component.css']
})
export class ListeResumeComponent implements OnInit {
  liste:any
  l:any
  constructor(private CandidatService:ResumeService){
  
  }
  ngOnInit(): void {
   this.CandidatService.getListResume().subscribe(rs=>{  
    this.liste=rs[0]
    this.l=this.liste.length
    console.log(rs)
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
     this.CandidatService.getListResume().subscribe(rs=>{  
  this.liste=rs[0]
  this.l=this.liste.length
  console.log(rs)
     })
}
actionSave(){
  this.show=false
  this.CandidatService.getListResume().subscribe(rs=>{  
    this.liste=rs[0]
    this.l=this.liste.length
    console.log(rs)
})
}
}
