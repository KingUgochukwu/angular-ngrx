import { User } from "../domain/user-models";

export interface AuthState{
    user: User | null;
    error: string | null;
}

export const initialAuthState: AuthState = {
    user: null, 
    error: null
}