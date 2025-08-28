import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CandidatService } from '../candidat.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-update-candidat',
  templateUrl: './update-candidat.component.html',
  styleUrls: ['./update-candidat.component.css']
})
export class UpdateCandidatComponent {

 form:FormGroup
   id:number=1
   res: any
 
   constructor(private fb:FormBuilder , private CandidatService:CandidatService , private route : ActivatedRoute){
 
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
    this.CandidatService.getCandidat(Number(this.id)).subscribe(data=>{
     console.log(data)
     this.form.patchValue(data)
    })
     
   }
   Submit(){
     console.log(this.id)
     this.CandidatService.updateCandidat(this.id, this.form.value).subscribe(ps=>{
       console.log(ps)
     })
   }

}
