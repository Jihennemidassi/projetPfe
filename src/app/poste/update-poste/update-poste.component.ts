import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PosteService } from '../poste.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-update-poste',
  templateUrl: './update-poste.component.html',
  styleUrls: ['./update-poste.component.css']
})
export class UpdatePosteComponent {
 form:FormGroup
  id:number=1
  res: any

  constructor(private fb:FormBuilder , private profileService:PosteService , private route : ActivatedRoute){

    this.form=fb.group({
  titre:['',Validators.required],
  description:['',Validators.minLength(2)],
  email:['',Validators.email],

    })
  }
  ngOnInit(): void {
    this.res=this.route.params.pipe(map((p) => p['id']));
    console.log(this.res.source.value.id)
   this.profileService.getPoste(Number(this.id)).subscribe(data=>{
    console.log(data)
    this.form.patchValue(data)
   })
    
  }
  Submit(){
    console.log(this.id)
    this.profileService.updatePoste(this.id, this.form.value).subscribe(ps=>{
      console.log(ps)
    })
  }
}
