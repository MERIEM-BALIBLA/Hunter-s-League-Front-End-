import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  isOpen = true;
  
  menuItems = [
    { title: 'Dashboard', icon: 'home' },
    { title: 'Analytics', icon: 'bar-chart' },
    { title: 'Users', icon: 'users' },
    { title: 'Messages', icon: 'mail' },
    { title: 'Settings', icon: 'settings' },
    { title: 'Help', icon: 'help-circle' }
  ];

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }
}