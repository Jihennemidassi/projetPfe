import { Component, OnInit } from '@angular/core';

import { EducationService } from '../education.service';

@Component({
  selector: 'app-liste-education',
  templateUrl: './liste-education.component.html',
  styleUrls: ['./liste-education.component.css']
})
export class ListeEducationComponent implements OnInit {
 liste:any;
 l:any;
 constructor(private educationService:EducationService){}
 ngOnInit():void{
  this.educationService.getAllEducations().subscribe(eds=>{
    this.liste=eds[0]
    this.l=this.liste.length
    console.log(eds)
  })
 }
 

}
