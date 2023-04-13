import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeSharedModule } from '../shared/home-shared.module';

@NgModule({
  imports: [
    // MODULES
    HomeSharedModule,

    // ROUTING
    DashboardRoutingModule,
  ],
  declarations: [
    DashboardComponent
  ],
})
export class DashboardModule { }
