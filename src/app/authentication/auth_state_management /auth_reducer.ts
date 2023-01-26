// import the create reducer and on from @ngrx/store
import { createReducer, on } from '@ngrx/store';
// import the actions from the auth_actions.ts file

// import the User and UserCredentials from the domain/user-models.ts file
import { User, UserCredentials } from '../domain/user-models';
import { AuthActions, loginFailure, loginSuccess, logoutFailure, startLoginProcess, startlogOut, logoutSuccess } from './auth_actions';
// import the AuthState and initialAuthState from the auth_state.ts file
import { AuthState, initialAuthState } from './auth_state';

const _authReducer = createReducer(
    initialAuthState,
    on(startLoginProcess, (state, { userCredentials }) => {
        return {
            ...state,
        }
    }
    ),
    on(loginSuccess, (state, { user }) => {
        return {
            ...state,
            user: user
        }
    }
    ),
    on(loginFailure, (state, { error }) => {
        return {
            ...state,
            error: error
        }
    }
    ),
    on(startlogOut, (state) => {

        return {
            ...state,
        }
    }
    ),
    on(logoutSuccess, (state) => {
        return {
            ...state,
            user: null
        }
    }),
    on(logoutFailure, (state, {error}) => {
        return {
            ...state,
            error: error
        }
    }
    )
);


export function AuthReducer(state: AuthState | undefined, action: AuthActions) {
    return _authReducer(state, action);
}