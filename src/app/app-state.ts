import { AuthState, initialAuthState } from "./authentication/auth_state_management /auth_state";

export interface FireTracAppState {
    auth: AuthState;
}

export const initialFireTracAppState: FireTracAppState = {
    auth: initialAuthState
}

export function getInitialState(): FireTracAppState {
    return initialFireTracAppState;
}