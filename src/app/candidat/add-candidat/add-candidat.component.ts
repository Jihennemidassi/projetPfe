import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CandidatService } from '../candidat.service';

@Component({
  selector: 'app-add-candidat',
  templateUrl: './add-candidat.component.html',
  styleUrls: ['./add-candidat.component.css']
})
export class AddCandidatComponent implements OnInit{
  form:FormGroup

  constructor(private fb:FormBuilder ,private serviceCandidat:CandidatService){
    this.form=fb.group({
      name:['',Validators.required],
      lastName:['',Validators.required],
      password:['',[Validators.required, Validators.minLength(6)]],
      email:['',[Validators.email,Validators.required]],
      age:[0]
  
    })
  }
  ngOnInit(): void {
 
  }
  ubmit(){
    console.log(this.form.value)
    this.serviceCandidat.createCandidat(this.form.value).subscribe(ps=>{
      console.log(ps)
    })
  }

}