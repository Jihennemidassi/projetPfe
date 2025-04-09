import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeResumeComponent } from './liste-resume/liste-resume.component';
import { AddResumeComponent } from './add-resume/add-resume.component';

const routes: Routes = [
  {path:'',component:ListeResumeComponent},
  {path:'add-resume',component:AddResumeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumeRoutingModule { }
