import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationRoutingModule } from './education-routing.module';
import { ListeEducationComponent } from './liste-education/liste-education.component';
import { UpdateEducationComponent } from './update-education/update-education.component';


@NgModule({
  declarations: [
    ListeEducationComponent,
    UpdateEducationComponent
  ],
  imports: [
    CommonModule,
    EducationRoutingModule
  ]
})
export class EducationModule { }
