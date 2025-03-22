import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecruteurComponent } from './add-recruteur/add-recruteur.component';
import { ListeRecruteurComponent } from './liste-recruteur/liste-recruteur.component';
import { UpdateCandidatComponent } from '../candidat/update-candidat/update-candidat.component';
import { UpdateRecruteurComponent } from './update-recruteur/update-recruteur.component';
import { DeleteRecruteurComponent } from './delete-recruteur/delete-recruteur.component';

const routes: Routes = [
  {path:"add-recruteur", component:AddRecruteurComponent},
  {path:"delete-recruteur", component:DeleteRecruteurComponent},
  {path:"update-recruteur", component:UpdateRecruteurComponent},
  {path:"", component:ListeRecruteurComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruteurRoutingModule { }
