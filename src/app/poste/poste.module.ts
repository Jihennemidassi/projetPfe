import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosteRoutingModule } from './poste-routing.module';
import { AddPosteComponent } from './add-poste/add-poste.component';
import { DeletePosteComponent } from './delete-poste/delete-poste.component';
import { UpdatePosteComponent } from './update-poste/update-poste.component';
import { ListePosteComponent } from './liste-poste/liste-poste.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddPosteComponent,
    DeletePosteComponent,
    UpdatePosteComponent,
    ListePosteComponent
  ],
  imports: [
    CommonModule,
    PosteRoutingModule , FormsModule , ReactiveFormsModule
  ]
})
export class PosteModule { }
