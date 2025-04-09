import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddExperienceComponent } from './add-experience/add-experience.component';
import { UpdateExperienceComponent } from './update-experience/update-experience.component';
import { ListeExperienceComponent } from './liste-experience/liste-experience.component';

const routes: Routes = [{path:"add-experience", component:AddExperienceComponent},
  {path:"update-experience", component:UpdateExperienceComponent},
  {path:"", component:ListeExperienceComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperienceRoutingModule { }
