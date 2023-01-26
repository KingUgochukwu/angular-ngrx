import { Observable } from "rxjs/internal/Observable";
import { AuthApiEndPoints, LogoutResponse, User } from "../domain/user-models";
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export abstract class  DataProvider {
  abstract login(username: string, password: string): Observable<User>;
  abstract logout(): Observable<boolean>;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationProvider extends DataProvider{
    baseDomain: string = "http://localhost:3000";

    constructor(private http: HttpClient) {
        super();
    }

    login(username: string, password: string): Observable<User> {
        let url = this.baseDomain + AuthApiEndPoints.login;
        return this.http.post(url, {username: username, password: password}).pipe(
          map(response => response as User)
        ); 
            
    }

    logout(): Observable<boolean> {
        let url = this.baseDomain + AuthApiEndPoints.logout;
        return this.http.post(url, {}).pipe(
          map(response =>( response as LogoutResponse).statusCode == 200))
        ; 
    }
}
@Injectable({
  providedIn: 'root'
})
export class MockDataProvider extends DataProvider {
    login(username: string, password: string): Observable<User> {
        return new Observable<User>(observer => {
            setTimeout(() => {
                return observer.next(
                  {
                  firstName: 'Jeb',
                  'lastName': 'Hisml',
                  'email': "test@firetrac.com",
                  phone: "+1 123 456 7890",
                  id: 1,
                });
            }, 1000);
        });

    }
    logout(): Observable<boolean> {
        return new Observable<boolean>(observer => {
            setTimeout(() => {
                return observer.next(true);
            }, 1000);
        } 
        );
      }
} 