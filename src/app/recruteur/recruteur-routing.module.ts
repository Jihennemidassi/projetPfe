import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeRecruteurComponent } from './liste-recruteur/liste-recruteur.component';
import { UpdateRecruteurComponent } from './update-recruteur/update-recruteur.component';
import { DeleteRecruteurComponent } from './delete-recruteur/delete-recruteur.component';
import { ProfileRecruteurComponent } from './profile-recruteur/profile-recruteur.component';

const routes: Routes = [
  {path:"delete-recruteur/:id", component:DeleteRecruteurComponent},
  {path:"update-recruteur/:id", component:UpdateRecruteurComponent},
  {path:"liste-recruteur", component:ListeRecruteurComponent},
  {path:"profile-recruteur", component:ProfileRecruteurComponent},

  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruteurRoutingModule { }
