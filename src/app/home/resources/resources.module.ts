import { NgModule } from '@angular/core';

import { ResourcesRoutingModule } from './resources-routing.module';
import { ResourcesComponent } from './resources.component';
import { HomeSharedModule } from '../shared/home-shared.module';
import { DxButtonModule, DxDataGridModule } from 'devextreme-angular';


@NgModule({
  imports: [
    // MODULES
    HomeSharedModule,
    DxDataGridModule,
    DxButtonModule,

    // ROUTING
    ResourcesRoutingModule
  ],
  declarations: [
    ResourcesComponent
  ],
})
export class ResourcesModule { }
