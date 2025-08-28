import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ListeResumeComponent } from './liste-resume/liste-resume.component';
import { AddResumeComponent } from './add-resume/add-resume.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteResumeComponent } from './delete-resume/delete-resume.component';


@NgModule({
  declarations: [
    ListeResumeComponent,
    AddResumeComponent,
    DeleteResumeComponent,
  ],
  imports: [
    CommonModule,
    ResumeRoutingModule , FormsModule , ReactiveFormsModule
  ]
})
export class ResumeModule { }
