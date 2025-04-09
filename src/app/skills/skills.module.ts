import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { AddSkillComponent } from './add-skill/add-skill.component';
import { DeleteSkillsComponent } from './delete-skills/delete-skills.component';
import { UpdateSkillsComponent } from './update-skills/update-skills.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListeSkillComponent } from './liste-skill/liste-skill.component';


@NgModule({
  declarations: [
    AddSkillComponent,
    DeleteSkillsComponent,
    UpdateSkillsComponent,
    ListeSkillComponent
  ],
  imports: [
    CommonModule,
    SkillsRoutingModule,FormsModule,ReactiveFormsModule
  ]
})
export class SkillsModule { }
