import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxButtonModule, DxDataGridModule } from 'devextreme-angular';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { HomeSharedModule } from '../shared/home-shared.module';


@NgModule({
  imports: [
    // MODULES
    HomeSharedModule,
    DxDataGridModule,
    DxButtonModule,

    // ROUTING
    ProjectsRoutingModule
  ],
  declarations: [
    ProjectsComponent
  ],
})
export class ProjectsModule { }
