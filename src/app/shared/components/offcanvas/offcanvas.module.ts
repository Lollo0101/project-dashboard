import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { OffcanvasComponent } from './offcanvas.component';

@NgModule({
  imports: [
    // MODULES
    CommonModule,
    TranslateModule
  ],
  declarations: [
    OffcanvasComponent
  ],
})
export class OffcanvasModule { }
