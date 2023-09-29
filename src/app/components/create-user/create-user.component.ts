import { Component } from '@angular/core';
import { Role } from 'src/app/common/role';
import { User } from 'src/app/common/user';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  constructor(private utilityService: UtilityService) {}

  firstName: string = "";
  lastName: string = "";
  role: string = "";
  email: string = "";
  password: string = "";
  user: User = new User();
  create() {
    this.user.firstName = this.firstName;
    this.user.lastName = this.lastName;
    this.user.email = this.email;
    this.user.password = this.password;
    if (this.role == Role.ADMIN) {
      this.user.role = Role.ADMIN;
    } else if (this.role == Role.MANAGER) {
      this.user.role = Role.MANAGER;
    } else {
      this.user.role = Role.USER;
    }
    console.log(this.user);

    this.utilityService.createUser(this.user).subscribe(
      data => {
        console.log("Create with success!", data);
      }
    )

  }
}
