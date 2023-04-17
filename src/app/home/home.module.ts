import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgLetModule } from 'ng-let';

@NgModule({
  imports: [
    // MODULES
    SharedModule,
    RouterModule,

    // ROUTING
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent
  ],
})
export class HomeModule { }
