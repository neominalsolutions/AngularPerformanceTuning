import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserService } from '../asyncPipes/user.service';

@Injectable({
  providedIn: 'root',
})
export class UserResolver implements Resolve<boolean> {
  constructor(private uService: UserService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.uService.getUsers();
  }
}
