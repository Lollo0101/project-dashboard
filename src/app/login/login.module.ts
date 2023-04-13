import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [
    // MODULES
    CommonModule,
    TranslateModule,

    // ROUTING
    LoginRoutingModule
  ],
  declarations: [
    LoginComponent
  ],
})
export class LoginModule { }
