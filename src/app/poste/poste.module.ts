import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosteRoutingModule } from './poste-routing.module';
import { AddPosteComponent } from './add-poste/add-poste.component';
import { DeletePosteComponent } from './delete-poste/delete-poste.component';
import { UpdatePosteComponent } from './update-poste/update-poste.component';
import { ListePosteComponent } from './liste-poste/liste-poste.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListeResumePosteComponent } from './liste-resume-poste/liste-resume-poste.component';
import { RouterModule } from '@angular/router';
import { PosteRecruteurComponent } from './poste-recruteur/poste-recruteur.component';


@NgModule({
  declarations: [
    AddPosteComponent,
    DeletePosteComponent,
    UpdatePosteComponent,
    ListePosteComponent,
    ListeResumePosteComponent,
    PosteRecruteurComponent
  ],
  imports: [
    CommonModule,
    PosteRoutingModule , FormsModule , ReactiveFormsModule, RouterModule
  ],
  exports:[]
})
export class PosteModule { }
