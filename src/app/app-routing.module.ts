import { NgModule, inject } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { Observable, map, tap } from 'rxjs';

import { UserStateService } from './user-state.service';

export const canActivate = (): Observable<boolean> => {
  const router = inject(Router);
  const filter = inject(UserStateService);

  filter.dispatchIsLogged();

  return filter.selectUser().pipe(
    map(user => !!user),
    tap(isLoggedIn => {
      if(!isLoggedIn) {
        router.navigate(['login']);
      }
    })
  );
}

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), canActivate: [() => canActivate()] },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
