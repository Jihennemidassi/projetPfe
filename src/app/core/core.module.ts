import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../profile/header/header.component';
import { SidnavComponent } from '../profile/sidnav/sidnav.component';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from '../profile/home-page/home-page.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidnavComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule , RouterModule
  ],
  exports:[HeaderComponent, SidnavComponent, HomePageComponent],
})
export class CoreModule { }
