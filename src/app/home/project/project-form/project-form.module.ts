import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ProjectFormComponent } from './project-form.component';
import { HomeSharedModule } from '../../shared/home-shared.module';
import { ProjectResourcesModule } from '../project-resources/project-resources.module';

@NgModule({
  imports: [
    // MODULES
    HomeSharedModule,
    ReactiveFormsModule,

    // COMPONENTS
    ProjectResourcesModule
  ],
  declarations: [
    ProjectFormComponent
  ],
  exports: [
    ProjectFormComponent
  ]
})
export class ProjectFormModule { }
