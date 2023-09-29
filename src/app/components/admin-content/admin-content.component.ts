import { Component } from '@angular/core';
import { Role } from 'src/app/common/role';

@Component({
  selector: 'app-admin-content',
  templateUrl: './admin-content.component.html',
  styleUrls: ['./admin-content.component.css']
})
export class AdminContentComponent {
    role: string = "USER";
}
