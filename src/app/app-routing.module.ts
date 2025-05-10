import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path:'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)},
  {path:'recruteur', loadChildren: () => import('./recruteur/recruteur.module').then(m => m.RecruteurModule)},
  {path:'candidat', loadChildren: () => import('./candidat/candidat.module').then(m => m.CandidatModule)},
  {path:'poste', loadChildren: () => import('./poste/poste.module').then(m => m.PosteModule)},
  {path:'skill', loadChildren: () => import('./skills/skills.module').then(m => m.SkillsModule)},
  {path:'experience', loadChildren: () => import('./experience/experience.module').then(m => m.ExperienceModule)},
  {path:'resume', loadChildren: () => import('./resume/resume.module').then(m => m.ResumeModule)},
  {path:'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
