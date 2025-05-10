import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidnavComponent } from '../profile/sidnav/sidnav.component';
import { HeaderComponent } from '../profile/header/header.component';
import { HomePageComponent } from '../profile/home-page/home-page.component';

const routes: Routes = [
  {path:"sidnav",component:SidnavComponent},
  {path:"",component:HomePageComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
