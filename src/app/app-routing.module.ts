import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path:'profile', loadChildren: () => import('./core/core.module').then(m => m.CoreModule)},
  {path:'recruteur', loadChildren: () => import('./recruteur/recruteur.module').then(m => m.RecruteurModule)},
  {path:'candidat', loadChildren: () => import('./candidat/candidat.module').then(m => m.CandidatModule)},
  {path:'poste', loadChildren: () => import('./poste/poste.module').then(m => m.PosteModule)},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
