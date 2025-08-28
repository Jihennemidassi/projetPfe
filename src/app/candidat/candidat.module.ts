import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatRoutingModule } from './candidat-routing.module';
import { DeleteCandidatComponent } from './delete-candidat/delete-candidat.component';
import { UpdateCandidatComponent } from './update-candidat/update-candidat.component';
import { ListeCandidatComponent } from './liste-candidat/liste-candidat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileCandidatComponent } from './profile-candidat/profile-candidat.component';
import { PosteModule } from '../poste/poste.module';


@NgModule({
  declarations: [
    DeleteCandidatComponent,
    UpdateCandidatComponent,
    ListeCandidatComponent,
    ProfileCandidatComponent
  ],
  imports: [
    CommonModule,
    CandidatRoutingModule , FormsModule, ReactiveFormsModule , PosteModule
  ]
})
export class CandidatModule { }
