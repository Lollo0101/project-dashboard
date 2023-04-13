import { Component } from '@angular/core';
import { UserStateService } from '../user-state.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../shared/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public user$ = this.userStateService.selectUser();

  public loginForm = new FormGroup({
    email: new FormControl<string>('', {
      validators: [Validators.required],
      nonNullable: true
    }),
    password: new FormControl<string>('', {
      validators: [Validators.required],
      nonNullable: true
    })
  });

  public constructor(
    private userStateService: UserStateService
  ) {}

  public onSubmit(): void {
    const user: User = this.loginForm.getRawValue();

    this.userStateService.dispatchLogin(user);
  }
}
