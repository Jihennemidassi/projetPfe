import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidnavComponent } from './sidnav/sidnav.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    SidnavComponent
  ],
  imports: [
    CommonModule , RouterModule
  ],
  exports:[HeaderComponent, SidnavComponent]
})
export class CoreModule { }
