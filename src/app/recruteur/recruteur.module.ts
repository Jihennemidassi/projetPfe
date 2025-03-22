import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruteurRoutingModule } from './recruteur-routing.module';
import { AddRecruteurComponent } from './add-recruteur/add-recruteur.component';
import { UpdateRecruteurComponent } from './update-recruteur/update-recruteur.component';
import { DeleteRecruteurComponent } from './delete-recruteur/delete-recruteur.component';
import { ListeRecruteurComponent } from './liste-recruteur/liste-recruteur.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddRecruteurComponent,
    UpdateRecruteurComponent,
    DeleteRecruteurComponent,
    ListeRecruteurComponent
  ],
  imports: [
    CommonModule,
    RecruteurRoutingModule, FormsModule, ReactiveFormsModule
  ]
})
export class RecruteurModule { }
