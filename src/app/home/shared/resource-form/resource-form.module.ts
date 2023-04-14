import { NgModule } from '@angular/core';
import { NgLetModule } from 'ng-let';

import { ResourceFormRoutingModule } from './resource-form-routing.module';
import { ResourceFormComponent } from './resource-form.component';
import { HomeSharedModule } from '../home-shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    // MODULES
    HomeSharedModule,
    NgLetModule,
    ReactiveFormsModule,

    // ROUTING
    ResourceFormRoutingModule
  ],
  declarations: [
    ResourceFormComponent
  ],
  exports: [
    ResourceFormComponent
  ]
})
export class ResourceFormModule { }
