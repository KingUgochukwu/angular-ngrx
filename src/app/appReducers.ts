import { ActionReducerMap } from "@ngrx/store";
import { FireTracAppState, initialFireTracAppState } from "./app-state";
import { AuthReducer } from "./authentication/auth_state_management /auth_reducer";

export const appReducers: ActionReducerMap<FireTracAppState, any> =  {
    auth: AuthReducer
}; 