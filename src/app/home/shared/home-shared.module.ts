import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [],
  exports: [
    SharedModule
  ]
})
export class HomeSharedModule { }
