import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidnavComponent } from './sidnav/sidnav.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [{path:"sidnav",component:SidnavComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
