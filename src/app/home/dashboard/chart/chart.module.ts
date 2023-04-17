import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartComponent } from './chart.component';
import { DxChartModule } from 'devextreme-angular';
import { NgLetModule } from 'ng-let';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    DxChartModule,
    NgLetModule
  ],
  declarations: [
    ChartComponent
  ],
  exports: [
    ChartComponent
  ]
})
export class ChartModule { }
