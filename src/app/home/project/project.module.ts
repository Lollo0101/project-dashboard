import { NgModule } from '@angular/core';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { HomeSharedModule } from '../shared/home-shared.module';
import { ProjectFormModule } from './project-form/project-form.module';

@NgModule({
  imports: [
    // MODULES
    HomeSharedModule,

    // ROUTING
    ProjectRoutingModule,

    // COMPONENT
    ProjectFormModule
  ],
  declarations: [
    ProjectComponent
  ],
})
export class ProjectModule { }
