import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProfileAdminComponent } from './profile-admin/profile-admin.component';
import { ListeUserComponent } from './liste-user/liste-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfileAdminComponent,
    ListeUserComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule , FormsModule , ReactiveFormsModule
  ]
})
export class AdminModule { }
