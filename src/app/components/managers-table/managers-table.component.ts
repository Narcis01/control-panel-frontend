import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/common/user';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-managers-table',
  templateUrl: './managers-table.component.html',
  styleUrls: ['./managers-table.component.css']
})
export class ManagersTableComponent implements OnInit {
  
  constructor(private utilityService: UtilityService){}

  users!: User[];
  allowed: boolean = false;

  ngOnInit(): void {
    this.getManagers();
  }

  getManagers(){
    this.utilityService.getManagers().subscribe(
      data => {this.users = data
              this.allowed = true;          
      },
      error =>{
        this.allowed = false;
      }
    )
  }

  delete(id: number) {
    this.utilityService.delete(id).subscribe(
      data => {
        console.log("User deleted: ", data);
        this.getManagers();
      },
      error =>{
        console.log("User could not be deleted", error);
      }

    )
  }

}
