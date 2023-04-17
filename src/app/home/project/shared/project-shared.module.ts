import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSharedModule } from '../../shared/home-shared.module';



@NgModule({
  imports: [
    HomeSharedModule
  ],
  declarations: [],
  exports: [
    HomeSharedModule
  ]
})
export class ProjectSharedModule { }
