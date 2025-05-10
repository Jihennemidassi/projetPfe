import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatRoutingModule } from './candidat-routing.module';
import { AddCandidatComponent } from './add-candidat/add-candidat.component';
import { DeleteCandidatComponent } from './delete-candidat/delete-candidat.component';
import { UpdateCandidatComponent } from './update-candidat/update-candidat.component';
import { ListeCandidatComponent } from './liste-candidat/liste-candidat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileCandidatComponent } from './profile-candidat/profile-candidat.component';


@NgModule({
  declarations: [
    AddCandidatComponent,
    DeleteCandidatComponent,
    UpdateCandidatComponent,
    ListeCandidatComponent,
    ProfileCandidatComponent
  ],
  imports: [
    CommonModule,
    CandidatRoutingModule , FormsModule, ReactiveFormsModule
  ]
})
export class CandidatModule { }
