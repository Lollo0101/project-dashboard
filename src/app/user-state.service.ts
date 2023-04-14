import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BaseStateService } from './base.state-service';
import { UserService } from './user.service';
import { User } from './shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserStateService extends BaseStateService<UserState> {
  public constructor(
    private userValidationService: UserService,
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
    const user = localStorage.getItem(UserService.USER);

    if(user) {
      this.updateState(state => ({
        ...state,
        user: JSON.parse(user)
      }), 'GET LOGGED USER');
    }
  }

  public dispatchLogout(): void {
    localStorage.clear();

    this.dispatchReset();
  }

  public dispatchLogin(user: User): void {
    this.userValidationService.login(user).subscribe({
      next: res => {
        localStorage.setItem(UserService.USER, JSON.stringify(res));

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