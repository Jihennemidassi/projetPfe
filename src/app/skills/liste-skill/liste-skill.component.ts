import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../skills.service';

@Component({
  selector: 'app-liste-skill',
  templateUrl: './liste-skill.component.html',
  styleUrls: ['./liste-skill.component.css']
})
export class ListeSkillComponent implements OnInit {
liste:any;
 l:any;
 constructor(private SkillService:SkillsService){}
 ngOnInit():void{
  this.SkillService.getAllSkills().subscribe(skSer=>{
    this.liste=skSer[0]
    this.l=this.liste.length
    console.log(skSer)
  })
 }
}
