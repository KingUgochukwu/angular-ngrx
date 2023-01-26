// create an action class for login that implements createAction
 import { createAction, props } from "@ngrx/store";
    import { User, UserCredentials } from "../domain/user-models";

    // create an action for startLoginProcess that implements createAction

    export const startLoginProcess = createAction(
        '[Login Page] User Login',
        props<{ userCredentials: UserCredentials }>()
    );

    export const loginSuccess = createAction(
        '[Login Page] User Login Success',
        props<{ user: User }>()
    );
    
    export const loginFailure = createAction(
        '[Login Page] User Login Failed',
        props<{ error : string }>()
    );
    
    export const startlogOut = createAction(
        '[Login Page] User Logout Start',
    );

    export const logoutSuccess = createAction(
        '[Login Page] User Logout Success',
    );

    export const logoutFailure = createAction(
        '[Login Page] User Logout Failed',
        props<{ error : string }>()
    );
    

    //create a union of all the types of actions and export it

    export type AuthActions =
    | typeof startLoginProcess
    | typeof loginSuccess
    | typeof loginFailure
    | typeof startlogOut
    | typeof logoutSuccess
    | typeof logoutFailure;
        
