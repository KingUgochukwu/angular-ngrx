
//create a new class called AuthEffects that implements the Effect class from @ngrx/effects
// import the Injectable decorator from @angular/core
import { Injectable } from '@angular/core';
// import the Actions class from @ngrx/effects
import { Actions, createEffect, ofType } from '@ngrx/effects';
// import the AuthActions from the auth_actions.ts file
import { AuthActions, startLoginProcess, startlogOut } from './auth_actions';
// import the StandardAuthRepository from the authentication.service.ts file
import { StandardAuthenticationRepository } from '../data/authentication_repository';
// import the map and switchMap operators from rxjs/operators
import { catchError, map, switchMap } from 'rxjs/operators';
// import the of operator from rxjs
import { of } from 'rxjs';
// import the loginSuccess and loginFailure actions from the auth_actions.ts file
import { loginFailure, loginSuccess } from './auth_actions';
// import the UserCredentials from the domain/user-models.ts file
import { UserCredentials } from '../domain/user-models';
// import the User from the domain/user-models.ts file
import { User } from '../domain/user-models';
// import the logoutSuccess and logoutFailure actions from the auth_actions.ts file
import { logoutFailure, logoutSuccess } from './auth_actions';

@Injectable()
export class AuthEffects {
    // create a constructor that takes in the Actions class and the StandardAuthenticationRepository
    constructor(private actions$: Actions, private authRepo: StandardAuthenticationRepository) { }

    // create a login$ effect that listens for the startLoginProcess action
    login$ = createEffect(() => this.actions$.pipe(
        ofType(startLoginProcess),
        switchMap((action) => {
            // call the login method of the StandardAuthenticationRepository and pass in the userCredentials
            return this.authRepo.login(action.userCredentials).pipe(
                // map the response to the loginSuccess action
                map((user: User | null ) => user != null ?  loginSuccess({ user: user }) : loginFailure({ error: 'Invalid Credentials' }),
                // catch any errors and map them to the loginFailure action
                catchError((error) => of(loginFailure({ error: error })))
            )
            )
        })
    ));

    // create a logout$ effect that listens for the startlogOut action
    logout$ = createEffect(() => this.actions$.pipe(
        ofType(startlogOut),
        switchMap(() => {
            // call the logout method of the StandardAuthenticationRepository
            return this.authRepo.logout().pipe(
                // map the response to the logoutSuccess action
                map(() => logoutSuccess()),
                // catch any errors and map them to the logoutFailure action
                catchError((error) => of(logoutFailure({ error: error })))
            )
        })
    ));
}