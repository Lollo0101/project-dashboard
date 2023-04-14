import { NgModule } from '@angular/core';

import { AddResourceRoutingModule } from './add-resource-routing.module';
import { AddResourceComponent } from './add-resource.component';
import { HomeSharedModule } from '../shared/home-shared.module';
import { ResourceFormModule } from '../shared/resource-form/resource-form.module';


@NgModule({
  imports: [
    // MODULES
    HomeSharedModule,

    // ROUTING
    AddResourceRoutingModule,

    // COMPONENTS
    ResourceFormModule
  ],
  declarations: [
    AddResourceComponent
  ],
})
export class AddResourceModule { }
