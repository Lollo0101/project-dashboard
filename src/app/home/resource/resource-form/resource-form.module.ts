import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ResourceFormComponent } from './resource-form.component';
import { HomeSharedModule } from '../../shared/home-shared.module';

@NgModule({
  imports: [
    // MODULES
    HomeSharedModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ResourceFormComponent
  ],
  exports: [
    ResourceFormComponent
  ]
})
export class ResourceFormModule { }
