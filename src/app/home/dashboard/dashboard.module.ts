import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeSharedModule } from '../shared/home-shared.module';
import { ChartModule } from './chart/chart.module';

@NgModule({
  imports: [
    // MODULES
    HomeSharedModule,

    // ROUTING
    DashboardRoutingModule,

    // COMPONENTS
    ChartModule
  ],
  declarations: [
    DashboardComponent
  ],
})
export class DashboardModule { }
