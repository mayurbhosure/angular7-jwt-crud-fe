import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import {ApiService} from './core/api.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {routing} from './app.routing';
import {TokenInterceptor} from './core/interceptor';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterUserComponent,
    EditUserComponent,
    ListUserComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService, {provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
