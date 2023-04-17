import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectResourcesComponent } from './project-resources.component';

const routes: Routes = [{ path: '', component: ProjectResourcesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectResourcesRoutingModule { }
