import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../service/auth/auth.service';
import { Observable, Subscription } from 'rxjs';

interface MenuItem {
  label: string;
  routerLink: string;
}

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule, NgIf, NgFor, AsyncPipe],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, OnDestroy {
  
  menuAdmin: MenuItem[] = [
    { label: 'Dashboard', routerLink: '/dash' },
  ];
  menuUser: MenuItem[] = [
    { label: 'Settings', routerLink: '/settings' },
    { label: 'Species', routerLink: '/species_page' },
  ];
  menuJury: MenuItem[] = [
    { label: 'Hunt', routerLink: '/jury/hunt' },
  ];

  currentMenu: MenuItem[] = [];
  isMobileMenuOpen = false;
  isLoggedIn$: Observable<boolean>;
  private roleSubscription: Subscription | null = null;

  constructor(private router: Router, private authService: AuthService) {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
  }

  ngOnInit() {
    this.roleSubscription = this.authService.userRole$.subscribe(() => {
      this.updateMenu();
    });
  }

  ngOnDestroy() {
    if (this.roleSubscription) {
      this.roleSubscription.unsubscribe();
    }
  }

  updateMenu() {
    const role = this.authService.getUserRole();
    switch (role) {
      case 'ADMIN':
        this.currentMenu = this.menuAdmin;
        break;
      case 'MEMBER':
        this.currentMenu = this.menuUser;
        break;
      case 'JURY':
        this.currentMenu = this.menuJury;
        break;
      default:
        this.currentMenu = [];
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  logout() {
    this.authService.logout();
  }
}
