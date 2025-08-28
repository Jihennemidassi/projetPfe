import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListeSkillComponent } from './liste-skill/liste-skill.component';


@NgModule({
  declarations: [
    ListeSkillComponent
  ],
  imports: [
    CommonModule,
    SkillsRoutingModule,FormsModule,ReactiveFormsModule
  ]
})
export class SkillsModule { }
