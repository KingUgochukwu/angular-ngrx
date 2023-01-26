import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { Observable } from "rxjs/internal/Observable";
import { User, UserCredentials } from "../domain/user-models";
import { DataProvider, AuthenticationProvider, MockDataProvider } from "./authentication_provider";
@Injectable({
    providedIn: 'root'
  })
export abstract class  AuthenticationRepository {
    abstract login(user: UserCredentials): Observable<User | null >;
    abstract logout(): Observable<boolean>;
    abstract register(user: User): Observable<User | null>;
    constructor(dataProvider: DataProvider) {
        
    }
}

@Injectable({
    providedIn: 'root'
  })
export class StandardAuthenticationRepository extends AuthenticationRepository {
    dataProvider: DataProvider; 
    constructor(dataProvider: MockDataProvider) {
        super(dataProvider);
        this.dataProvider = dataProvider;
    }
    login(user: UserCredentials): Observable<User | null> {
        return this.dataProvider.login(user.email, user.password).pipe(
            map(response => response as User)
        );
    }
    logout(): Observable<boolean> {
        return this.dataProvider.logout().pipe(
            map(response => response)
        );
    }
    register(user: User): Observable<User | null> {
        throw new Error("Method not implemented.");
    }
}