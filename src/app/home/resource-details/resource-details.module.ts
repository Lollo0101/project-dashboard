import { NgModule } from '@angular/core';

import { ResourceDetailsRoutingModule } from './resource-details-routing.module';
import { ResourceDetailsComponent } from './resource-details.component';
import { HomeSharedModule } from '../shared/home-shared.module';


@NgModule({
  imports: [
    HomeSharedModule,
    ResourceDetailsRoutingModule
  ],
  declarations: [
    ResourceDetailsComponent
  ],
})
export class ResourceDetailsModule { }
