import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterRequest } from 'src/app/common/register-request';
import { Role } from 'src/app/common/role';
import { Token } from 'src/app/common/token';
import { User } from 'src/app/common/user';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService,
              private tokenService: TokenService,
              private utilityService: UtilityService,
              private router: Router) {  }

  active: string ="";
  email: string = "";
  password: string = "";
  firstName: string = "";
  lastName: string = "";
  users?: User[];
  registerRequest: RegisterRequest = new RegisterRequest();
  token: Token = new Token();
  onLogin(){
    this.active = "login";
  }

  onRegister() {
    this.active = "register"
  }

  onLoginSubmit(){
    console.log("Trying to log in with " + this.email + " " + this.password);
    this.authService.login(this.email, this.password).subscribe(
      response => {
        console.log("Login successful: ", response);
        this.token = response;
        this.tokenService.setToken(this.token.access_token)
        console.log(this.tokenService.getToken());
        this.utilityService.setUser(this.email);
        this.utilityService.setRole(response.role);
        this.utilityService.setSignIn(true);
        this.router.navigate(['users'])
      },
      error =>{
        console.log(error);
        this.utilityService.setUser("");
        this.utilityService.setRole("");
        this.utilityService.setSignIn(false);
      }
    ) 
  }

  onRegisterSubmit(){
    console.log("Trying to register with: "+ this.email + " " + this.password + " " + this.firstName + " " + this.lastName)
    this.registerRequest.email= this.email;
    this.registerRequest.firstName= this.firstName;
    this.registerRequest.lastName= this.lastName;
    this.registerRequest.password= this.password;
    this.registerRequest.role = Role.MANAGER;

    this.authService.registerUser(this.registerRequest).subscribe(
      response => {
        console.log("Register successful: ");
        return response;
      }
    )
  }
}
