import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SkillsService } from '../skills.service';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent {
  form:FormGroup
  constructor(private fb:FormBuilder , private skillsService:SkillsService){

this.form=this.fb.group({
  title:['',[Validators.required ,Validators.minLength(4)]],
  description:['',[Validators.required ,Validators.minLength(4)]]
})
  }
  onSubmit(){
    this.skillsService.createSkill(this.form.value).subscribe(data=>{
      console.log("data",data)
    })
  }
}
