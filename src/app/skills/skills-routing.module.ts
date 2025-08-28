import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeSkillComponent } from './liste-skill/liste-skill.component';
const routes: Routes = [
   {path:"", component:ListeSkillComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsRoutingModule { }
