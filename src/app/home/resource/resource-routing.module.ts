import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourceDetailsComponent } from './resource.component';

const routes: Routes = [
  { path: '', component: ResourceDetailsComponent },
  { path: ':id', loadChildren: () => import('./resource.module').then(m => m.ResourceDetailsModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourceDetailsRoutingModule { }
