import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EducationService } from '../education.service';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})
export class AddEducationComponent {

  form:FormGroup
     constructor(private fb:FormBuilder , private EducationService:EducationService){
   
   this.form=this.fb.group({
     title:['',[Validators.required ,Validators.minLength(4)]],
     description:['',[Validators.required ,Validators.minLength(4)]]
   })
     }
     onSubmit(){
       this.EducationService.createEducation(this.form.value).subscribe(data=>{
         console.log("data",data)
       })
     }
 
}
