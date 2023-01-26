import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { startLoginProcess } from './auth_state_management /auth_actions';
import {  loggedInUser } from './auth_state_management /auth_selector';
import { AuthState } from './auth_state_management /auth_state';
import { User } from './domain/user-models';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent {

  user$: Observable<string>; 
  
    constructor(private _store: Store<{auth: AuthState}>) {
      this.user$ = this._store.pipe(select(loggedInUser))
    }

    ngOnInit(): void {
    }

    logIn() {
      this._store.dispatch(startLoginProcess({userCredentials: {'email': 'bla@initialFireTracAppState.com', 'password': '123'}}))
    }

}
