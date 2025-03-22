import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListePosteComponent } from './liste-poste/liste-poste.component';
import { AddPosteComponent } from './add-poste/add-poste.component';
import { DeletePosteComponent } from './delete-poste/delete-poste.component';
import { UpdatePosteComponent } from './update-poste/update-poste.component';

const routes: Routes = [{path:"", component:ListePosteComponent},
  {path:"add-poste", component:AddPosteComponent},
  {path:"delete-poste", component:DeletePosteComponent},
  {path:"update-poste", component:UpdatePosteComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PosteRoutingModule { }
