import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


import { AppComponent } from './app.component';
import { appReducers } from './appReducers';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthenticationService } from './authentication/authentication.service';
import { AuthEffects } from './authentication/auth_state_management /auth_effects';
import { AuthReducer } from './authentication/auth_state_management /auth_reducer';
import { StandardAuthenticationRepository } from './authentication/data/authentication_repository';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers), 
    EffectsModule.forRoot([AuthEffects]), 
    StoreDevtoolsModule.instrument()
  ],
  providers: [AuthenticationService, StandardAuthenticationRepository],
  bootstrap: [AppComponent]
})
export class AppModule { }
