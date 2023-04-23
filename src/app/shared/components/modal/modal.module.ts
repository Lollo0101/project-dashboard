import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ModalComponent } from './modal.component';

@NgModule({
  imports: [
    // MODULES
    CommonModule,
    TranslateModule
  ],
  declarations: [
    ModalComponent
  ],
  exports: [
    ModalComponent
  ]
})
export class ModalModule { }
