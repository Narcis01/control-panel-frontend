import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Role } from 'src/app/common/role';
import { User } from 'src/app/common/user';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private utility: UtilityService,
              private route: ActivatedRoute){}
  
  
  email?: string = "";
  password?: string = "";
  firstName: string = this.route.snapshot.paramMap.get('firstName')!;
  lastName: string = this.route.snapshot.paramMap.get('lastName')!;
  role: string = "";

  user: User = new User();
  ngOnInit(): void {
    this.utility.getUserByName(this.firstName, this.lastName).subscribe(
      data =>{
        this.email = data.email;
        console.log("Get user by name: ",data);
      } )
  }


  updateUser(){
      this.user.firstName = this.firstName;
      this.user.lastName = this.lastName;
      this.user.password = this.password;
      this.user.email = this.email;
      if (this.role == Role.ADMIN) {
        this.user.role = Role.ADMIN;
      } else if (this.role == Role.MANAGER) {
        this.user.role = Role.MANAGER;
      } else {
        this.user.role = Role.USER;
      }
      console.log("New User: ", this.user);
      this.utility.saveUser(this.user).subscribe(
        data =>{
          console.log("User updated: ",data);
        }
      )
  }
}
