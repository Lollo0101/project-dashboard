import { NgModule } from '@angular/core';

import { ResourceDetailsRoutingModule } from './resource-details-routing.module';
import { ResourceDetailsComponent } from './resource-details.component';
import { HomeSharedModule } from '../shared/home-shared.module';
import { ResourceFormModule } from '../shared/resource-form/resource-form.module';


@NgModule({
  imports: [
    // MODULES
    HomeSharedModule,

    // ROUTING
    ResourceDetailsRoutingModule,
    
    // COMPONENTS
    ResourceFormModule,
  ],
  declarations: [
    ResourceDetailsComponent
  ],
})
export class ResourceDetailsModule { }
