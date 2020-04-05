import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from '../shared/authentication.service'
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './things/home/home.component';
import { RouterModule } from '@angular/router';
import { AddThingComponent } from './things/add-thing/add-thing.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    HomeComponent,
    AddThingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponentComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'newThing',
        component: AddThingComponent
      },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ])
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
