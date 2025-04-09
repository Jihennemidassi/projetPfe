import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceRoutingModule } from './experience-routing.module';
import { AddExperienceComponent } from './add-experience/add-experience.component';
import { UpdateExperienceComponent } from './update-experience/update-experience.component';
import { ListeExperienceComponent } from './liste-experience/liste-experience.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddExperienceComponent,
    UpdateExperienceComponent,
    ListeExperienceComponent
  ],
  imports: [
    CommonModule,
    ExperienceRoutingModule,FormsModule, ReactiveFormsModule
  ]
})
export class ExperienceModule { }
