import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    // MODULES
    SharedModule,
    ReactiveFormsModule,

    // ROUTING
    LoginRoutingModule
  ],
  declarations: [
    LoginComponent
  ],
})
export class LoginModule { }
