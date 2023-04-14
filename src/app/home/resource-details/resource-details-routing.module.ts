import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourceDetailsComponent } from './resource-details.component';

const routes: Routes = [{ path: '', component: ResourceDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourceDetailsRoutingModule { }
