import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteCandidatComponent } from './delete-candidat/delete-candidat.component';
import { UpdateCandidatComponent } from './update-candidat/update-candidat.component';
import { ListeCandidatComponent } from './liste-candidat/liste-candidat.component';
import { ProfileCandidatComponent } from './profile-candidat/profile-candidat.component';

const routes: Routes = [
  {path:"delete-candidat/:id", component:DeleteCandidatComponent},
  {path:"update-candidat/:id", component:UpdateCandidatComponent},
  {path:"liste-candidat", component:ListeCandidatComponent},
  {path:"profile-candidat", component:ProfileCandidatComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatRoutingModule { }
