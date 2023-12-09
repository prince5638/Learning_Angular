import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {UserAuthModule} from './user-auth/user-auth.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { CountryListComponent } from './country-list/country-list.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButton, MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    StudentsListComponent,
    CountryListComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
