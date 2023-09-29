import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RoleListComponent } from './components/role-list/role-list.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { LoginContentComponent } from './components/login-content/login-content.component';
import { LoginComponent } from './components/login/login.component';
import { LoginMessageComponent } from './components/login-message/login-message.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AdminsTableComponent } from './components/admins-table/admins-table.component';
import { ManagersTableComponent } from './components/managers-table/managers-table.component'
import { TokenInterceptorService } from './services/token-interceptor.service';
import { AdminContentComponent } from './components/admin-content/admin-content.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { EditComponent } from './components/edit/edit.component';
const routes: Routes = [
  {path: 'users', component: UsersTableComponent},
  {path: 'admins', component: AdminsTableComponent,},
  {path: 'managers', component: ManagersTableComponent},
  {path: 'login', component: LoginComponent},
  {path: 'create', component: CreateUserComponent},
  {path: 'edit/:firstName/:lastName', component: EditComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }

]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RoleListComponent,
    UsersTableComponent,
    LoginContentComponent,
    LoginComponent,
    LoginMessageComponent,
    AdminsTableComponent,
    ManagersTableComponent,
    AdminContentComponent,
    CreateUserComponent,
    EditComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
