import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { BaseStateService } from './base.state-service';
import { UserService } from './user.service';
import { User } from './shared/models/user';
import { Modal } from './shared/models/modal';
import { ModalComponent } from './shared/components/modal/modal.component';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class UserStateService extends BaseStateService<UserState> {
  public constructor(
    private translate: TranslateService,
    private modalService: NgbModal,
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
        const modal: Modal = {
          title: this.translate.instant('LOGIN.ERROR'),
          description: this.translate.instant('LOGIN.WRONG_CREDENTIALS'),
          positiveText: this.translate.instant('LOGIN.OK'),
          negativeText: undefined
        }

        this.openModal(ModalComponent, modal)
      }
    });
  }

  // SELECTORS

  public selectUser = () => this.select(state => state.user);

//-UTILS-----------------------------------------------------------

  private openModal(content: any, modal: Modal): void {
    const modalRef = this.modalService.open(content, { centered: true });

    modalRef.result.then(
      result => {}
    );

    modalRef.componentInstance.modal = modal;
  }
}

interface UserState {
  user: User | undefined
}