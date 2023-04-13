import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

import { UserDBService } from './user-db.service';
import { User } from './shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserValidationService {
  public static readonly USER = "user";

  public constructor(private userDBService: UserDBService) {}

  public login(user: User): Observable<User | undefined> {
    return this.userDBService.getUser(user.email);
  }

  public logout(): Observable<boolean> {
    localStorage.clear();

    return of(true);
  }
}
