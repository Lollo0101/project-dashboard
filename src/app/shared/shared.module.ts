import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgLetModule } from 'ng-let';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    NgLetModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    TranslateModule,
    NgLetModule
  ]
})
export class SharedModule { }
