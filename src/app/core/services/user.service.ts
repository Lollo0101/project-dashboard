import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

import { USERS } from '../../shared/mocks/users';
import { User } from '../../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public static readonly USER = "user";

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

  public login(user: User): Observable<User | undefined> {
    return this.getUser(user.email);
  }
}
