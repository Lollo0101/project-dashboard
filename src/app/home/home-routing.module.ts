import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'resources', loadChildren: () => import('./resources/resources.module').then(m => m.ResourcesModule) },
      { path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) },
      { path: 'resource-details/:id', loadChildren: () => import('./resource-details/resource-details.module').then(m => m.ResourceDetailsModule) },
      { path: 'add-resource', loadChildren: () => import('./add-resource/add-resource.module').then(m => m.AddResourceModule) },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
