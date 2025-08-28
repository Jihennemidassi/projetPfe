import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecruteurService } from '../recruteur.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-update-recruteur',
  templateUrl: './update-recruteur.component.html',
  styleUrls: ['./update-recruteur.component.css']
})
export class UpdateRecruteurComponent {

form:FormGroup
  id:number=1
  res: any

  constructor(private fb:FormBuilder , private recruteurService:RecruteurService , private route : ActivatedRoute){

    this.form=fb.group({
  nom :['',Validators.required],
  prenom:['',Validators.minLength(2)],
  email:['',Validators.email],
  entreprise:['',Validators.email],

    })
  }
  ngOnInit(): void {
    this.res=this.route.params.pipe(map((p) => p['id']));
    console.log(this.res.source.value.id)
   this.recruteurService.getRecruteur(Number(this.id)).subscribe(data=>{
    console.log(data)
    this.form.patchValue(data)
   })
    
  }
  Submit(){
    console.log(this.id)
    this.recruteurService.updateRecruteur(this.id, this.form.value).subscribe(ps=>{
      console.log(ps)
    })
  }
}

