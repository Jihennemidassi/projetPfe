import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecruteurService } from '../recruteur.service';

@Component({
  selector: 'app-add-recruteur',
  templateUrl: './add-recruteur.component.html',
  styleUrls: ['./add-recruteur.component.css']
})
export class AddRecruteurComponent implements OnInit{
  form:FormGroup

  constructor(private fb:FormBuilder ,private serviceRecruteur:RecruteurService){
    this.form=fb.group({
      name:['',Validators.required],
      lastName:['',Validators.required],
      email:['',[Validators.email,Validators.required]],
      age:[0]
  
    })
  }
  ngOnInit(): void {
 
  }
  ubmit(){
    console.log(this.form.value)
    this.serviceRecruteur.createRecruteur(this.form.value).subscribe(ps=>{
      console.log(ps)
    })
  }

}
