import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExperienceService } from '../experience.service';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})
export class AddExperienceComponent {
    form:FormGroup
    constructor(private fb:FormBuilder , private experienceService:ExperienceService){
  
  this.form=this.fb.group({
    title:['',[Validators.required ,Validators.minLength(4)]],
    description:['',[Validators.required ,Validators.minLength(4)]]
  })
    }
    onSubmit(){
      this.experienceService.createExperience(this.form.value).subscribe(data=>{
        console.log("data",data)
      })
    }

}
