export interface User{
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}

export interface LoginResponse{
        statusCode?: number;
        authorizationToken?: string;
        userData?: object;
}

export interface LogoutResponse{
    statusCode?: number;
    message?: string;
}

export interface UserCredentials{
    email: string;
    password: string;
}

export interface AuthError{
    error: string;
}

export class AuthApiEndPoints{
    static readonly login = "/login";
    static readonly register = "/register";
    static readonly logout = "/logout";
}