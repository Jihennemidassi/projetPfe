import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationRoutingModule } from './education-routing.module';
import { ListeEducationComponent } from './liste-education/liste-education.component';
import { UpdateEducationComponent } from './update-education/update-education.component';
import { AddEducationComponent } from './add-education/add-education.component';


@NgModule({
  declarations: [
    ListeEducationComponent,
    UpdateEducationComponent,
    AddEducationComponent
  ],
  imports: [
    CommonModule,
    EducationRoutingModule
  ]
})
export class EducationModule { }
