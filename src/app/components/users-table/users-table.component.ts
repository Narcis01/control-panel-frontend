import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/common/role';
import { User } from 'src/app/common/user';
import { TokenService } from 'src/app/services/token.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {

  users!: User[];
  token = this.tokenService.getToken();
  role: string= "";
  constructor(private utility: UtilityService,
    private tokenService: TokenService) { }

  ngOnInit(): void {
    
      this.getUsers();
      this.utility.userRole.subscribe(
        data => {
          this.role = data;
        }
      )
    
  }

  getUsers() {
    this.utility.getUsers().subscribe(
      data => {
        this.users = data;
        console.log("Users: ", this.users);
      }
    )
  }

  delete(id: number) {
    this.utility.delete(id).subscribe(
      data => {
        console.log("User deleted: ", data);
        this.getUsers();
      },
      error =>{
        console.log("User could not be deleted", error);
      }

    )
  }

}
