import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/common/user';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-admins-table',
  templateUrl: './admins-table.component.html',
  styleUrls: ['./admins-table.component.css']
})
export class AdminsTableComponent implements OnInit {
  
  constructor(private utilityService: UtilityService){}

  users!: User[];
  allowed: boolean = false;
  ngOnInit(): void {
    this.getAdmins();
  }

  getAdmins(){
    this.utilityService.getAdmins().subscribe(
      data => {this.users = data
                this.allowed = true;
      },
      error => {
          console.log(error)
          this.allowed = false;
      }
    )
  }

  delete(id: number) {
    this.utilityService.delete(id).subscribe(
      data => {
        console.log("User deleted: ", data);
        this.getAdmins();
      },
      error =>{
        console.log("User could not be deleted", error);
      }

    )
  }

}
