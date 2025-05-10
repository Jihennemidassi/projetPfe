import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SidnavComponent } from './sidnav/sidnav.component';

const routes: Routes = [
  {path:"home",component:HomePageComponent},
   {path:"sidnav",component:SidnavComponent},
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
