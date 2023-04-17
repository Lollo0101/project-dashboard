import { NgModule } from '@angular/core';

import { ResourceDetailsRoutingModule } from './resource-routing.module';
import { ResourceDetailsComponent } from './resource.component';
import { HomeSharedModule } from '../shared/home-shared.module';
import { ResourceFormModule } from './resource-form/resource-form.module';


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
