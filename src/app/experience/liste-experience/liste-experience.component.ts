import { Component, OnInit } from '@angular/core';
import{ExperienceService} from'../experience.service';
@Component({
  selector: 'app-liste-experience',
  templateUrl: './liste-experience.component.html',
  styleUrls: ['./liste-experience.component.css']
})
export class ListeExperienceComponent implements OnInit {
liste:any;
 l:any;
 constructor(private ExperienceService:ExperienceService){}
 ngOnInit():void{
  this.ExperienceService.getAllExperiences().subscribe(exps=>{
    this.liste=exps[0]
    this.l=this.liste.length
    console.log(exps)
  })
 }
}
