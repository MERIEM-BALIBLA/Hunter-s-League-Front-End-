import { Component } from '@angular/core';
import { SideBarComponent } from '../../side-bar/side-bar.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [SideBarComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

}
