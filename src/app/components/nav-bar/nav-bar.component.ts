import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule, NgIf],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  isMobileMenuOpen = false;

  // toggleMobileMenu() {
  //   this.isMobileMenuOpen = !this.isMobileMenuOpen;
  // }

  constructor(private router: Router) {}

  // Toggle the mobile menu
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  // Check if the user is authenticated
  isAuthenticated(): boolean {
    return !!localStorage.getItem('jwt'); // Vérifie si le token JWT existe dans le localStorage
  }

  // Log out the user
  logout() {
    localStorage.removeItem('jwt'); // Supprimer le token JWT du localStorage
    this.router.navigate(['/login']); // Rediriger l'utilisateur vers la page de login
  }
}
