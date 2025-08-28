import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListePosteComponent } from './liste-poste/liste-poste.component';
import { AddPosteComponent } from './add-poste/add-poste.component';
import { DeletePosteComponent } from './delete-poste/delete-poste.component';
import { UpdatePosteComponent } from './update-poste/update-poste.component';
import { ListeResumePosteComponent } from './liste-resume-poste/liste-resume-poste.component';
import { PosteRecruteurComponent } from './poste-recruteur/poste-recruteur.component';

const routes: Routes = [{path:"liste-poste", component:ListePosteComponent},
  {path:"add-poste", component:AddPosteComponent},
  {path:"delete-poste/:id", component:DeletePosteComponent},
  {path:"update-poste/:id", component:UpdatePosteComponent},
  {path:"resume-poste", component:ListeResumePosteComponent},
    {path:"poste-recruteur", component:PosteRecruteurComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PosteRoutingModule { }
