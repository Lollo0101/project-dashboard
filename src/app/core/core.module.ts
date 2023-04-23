import { NgModule } from '@angular/core';

import { ProjectService } from './services/project.service';
import { ResourceService } from './services/resource.service';
import { UserService } from './services/user.service';

@NgModule({
  providers: [
    ProjectService,
    ResourceService,
    UserService
  ]
})
export class CoreModule { }
