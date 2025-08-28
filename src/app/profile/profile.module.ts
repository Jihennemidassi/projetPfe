import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { HeaderComponent } from './header/header.component';
import { SidnavComponent } from './sidnav/sidnav.component';


@NgModule({
  declarations: [HeaderComponent, SidnavComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule, 
  ],
  exports:[HeaderComponent, SidnavComponent]
})
export class ProfileModule { }
