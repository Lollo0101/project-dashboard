import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DxButtonModule, DxDataGridModule, DxSelectBoxModule } from 'devextreme-angular';

import { ProjectResourcesComponent } from './project-resources.component';
import { NgLetModule } from 'ng-let';

@NgModule({
  imports: [
    CommonModule,
    DxDataGridModule,
    DxButtonModule,
    DxSelectBoxModule,
    TranslateModule,
    NgLetModule
  ],
  declarations: [
    ProjectResourcesComponent
  ],
  exports: [
    ProjectResourcesComponent
  ]
})
export class ProjectResourcesModule { }
