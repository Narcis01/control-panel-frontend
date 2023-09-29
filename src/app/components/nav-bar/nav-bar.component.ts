import { Component } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
    name: string = "";
    role: string = "";
    signIn: boolean = false;
    constructor(private utilityService: UtilityService){
      this.utilityService.username.subscribe((data) =>{
        this.name = data;
        console.log(data);
            });

      this.utilityService.userRole.subscribe( (data) =>{
        this.role = data;
        console.log(data);
      });

      this.utilityService.sign.subscribe( (data) => {
        this.signIn = data;
        console.log(data);
      })
    }

    logout(){
      this.utilityService.logout().subscribe(
        data =>{
          console.log("Log out!");
          this.role = "";
          this.signIn = false;
          this.name = "";
        },

        error =>{
          console.log(error);
        }
        
      )
    }
}
