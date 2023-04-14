import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

import { TopBarComponent } from './top-bar.component';

@NgModule({
  imports: [
    // MODULES
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  declarations: [
    TopBarComponent
  ],
  exports: [
    TopBarComponent
  ]
})
export class TopBarModule { }
