import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { AddSkillComponent } from './add-skill/add-skill.component';
import { DeleteSkillsComponent } from './delete-skills/delete-skills.component';
import { UpdateSkillsComponent } from './update-skills/update-skills.component';


@NgModule({
  declarations: [
    AddSkillComponent,
    DeleteSkillsComponent,
    UpdateSkillsComponent
  ],
  imports: [
    CommonModule,
    SkillsRoutingModule
  ]
})
export class SkillsModule { }
