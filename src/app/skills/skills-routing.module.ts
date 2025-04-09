import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSkillComponent } from './add-skill/add-skill.component';
import { DeleteSkillsComponent } from './delete-skills/delete-skills.component';
import { UpdateSkillsComponent } from './update-skills/update-skills.component';
import { ListeSkillComponent } from './liste-skill/liste-skill.component';
const routes: Routes = [
 {path:"add-Skill", component:AddSkillComponent},
   {path:"delete-Skill", component:DeleteSkillsComponent},
   {path:"update-Skill", component:UpdateSkillsComponent},
   {path:"", component:ListeSkillComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsRoutingModule { }
