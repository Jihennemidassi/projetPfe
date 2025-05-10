import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCandidatComponent } from './add-candidat/add-candidat.component';
import { DeleteCandidatComponent } from './delete-candidat/delete-candidat.component';
import { UpdateCandidatComponent } from './update-candidat/update-candidat.component';
import { ListeCandidatComponent } from './liste-candidat/liste-candidat.component';
import { ProfileCandidatComponent } from './profile-candidat/profile-candidat.component';

const routes: Routes = [ {path:"add-candidat", component:AddCandidatComponent},
  {path:"delete-candidat", component:DeleteCandidatComponent},
  {path:"update-candidat", component:UpdateCandidatComponent},
  {path:"", component:ListeCandidatComponent},
  {path:"profile-candidat", component:ProfileCandidatComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatRoutingModule { }
