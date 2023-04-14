import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddResourceComponent } from './add-resource.component';

const routes: Routes = [{ path: '', component: AddResourceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddResourceRoutingModule { }
