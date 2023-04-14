import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourceFormComponent } from './resource-form.component';

const routes: Routes = [{ path: '', component: ResourceFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourceFormRoutingModule { }
