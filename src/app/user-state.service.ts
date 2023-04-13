import { Injectable } from '@angular/core';

import { BaseStateService } from './base.state-service';
import { UserValidationService } from './user-validation.service';
import { User } from './shared/models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserStateService extends BaseStateService<UserState> {
  public constructor(
    private userValidationService: UserValidationService,
    private router: Router
  ) {
    super();
  }
  
  protected override get initalState(): UserState {
    return {
      user: undefined
    }
  }

  // ACTIONS

  public dispatchIsLogged(): void {
    // get the log status from the local storage and update the state
    const user = localStorage.getItem(UserValidationService.USER);

    if(user) {
      this.updateState(state => ({
        ...state,
        user: JSON.parse(user)
      }), 'GET LOGGED USER');
    }
  }

  public dispatchLogout(): void {
    // manage errors if the logout goes wrong
    this.userValidationService.logout().subscribe();

    this.dispatchReset();
  }

  public dispatchLogin(user: User): void {
    // manage errors if the login goes wrong
    this.userValidationService.login(user).subscribe({
      next: res => {
        localStorage.setItem(UserValidationService.USER, JSON.stringify(res));

        this.updateState(state => ({
          ...state,
          user: res
        }), 'LOGIN');

        this.router.navigate(['home']);
      },
      error: error => {
        // lauch modal
        alert('Wrong credentials');
      }
    });
  }

  // SELECTORS

  public selectUser = () => this.select(state => state.user);
}

interface UserState {
  user: User | undefined
}