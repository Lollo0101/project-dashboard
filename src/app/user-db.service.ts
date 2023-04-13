import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

import { User } from './shared/models/user';
import { USERS } from './shared/mocks/users';

@Injectable({
  providedIn: 'root'
})
export class UserDBService {
  private users: User[] = [];

  public constructor() {
    this.users = USERS;
  }

  public getUsers(): Observable<User[]> {
    return of(this.users);
  }

  public getUser(email: string): Observable<User | undefined> {
    const user = this.users.find(res => res.email == email);

    if(!user) {
      return throwError(() => 'Wrong credentials' /* throw new Error('Wrong credentials') */);
    }

    return of(user);
  }
}
