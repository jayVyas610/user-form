import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListUsersComponent } from './users/list-users.component';
import { CreateUserComponent } from './users/create-user.component';
import { userService } from './users/user.service';
import { DisplayUserComponent } from './users/display-user.component';

const appRoutes: Routes = [
  {path: 'list', component: ListUsersComponent},
  {path: 'create', component: CreateUserComponent},
  {path: ':id/update', component: CreateUserComponent},
  {path: '', redirectTo: '/list', pathMatch: 'full'},
  {path: '**', component: CreateUserComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    CreateUserComponent,
    DisplayUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [userService],
  bootstrap: [AppComponent]
})
export class AppModule { }
