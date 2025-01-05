import { Component } from '@angular/core';
import { SideComponent } from '../Barr/side/side.component';
import { HeaderComponent } from '../Barr/header/header.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SideComponent, HeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
