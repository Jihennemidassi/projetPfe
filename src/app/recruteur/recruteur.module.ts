import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecruteurRoutingModule } from './recruteur-routing.module';
import { UpdateRecruteurComponent } from './update-recruteur/update-recruteur.component';
import { DeleteRecruteurComponent } from './delete-recruteur/delete-recruteur.component';
import { ListeRecruteurComponent } from './liste-recruteur/liste-recruteur.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileRecruteurComponent } from './profile-recruteur/profile-recruteur.component';


@NgModule({
  declarations: [
    UpdateRecruteurComponent,
    DeleteRecruteurComponent,
    ListeRecruteurComponent,
    ProfileRecruteurComponent,
  ],
  imports: [
    CommonModule,
    RecruteurRoutingModule, FormsModule, ReactiveFormsModule
  ]
})
export class RecruteurModule { }
