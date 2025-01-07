import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const roleGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  
  // Récupérer le token JWT du localStorage
  const token = localStorage.getItem('jwt'); 

  // Si le token n'existe pas, rediriger vers la page de connexion
  if (!token) {
    router.navigateByUrl('/login');
    return false;
  }

  try {
    // Séparer le token en trois parties : header, payload et signature
    const payloadBase64 = token.split('.')[1];

    // Décoder la partie payload du token (base64)
    const payloadJson = atob(payloadBase64);

    // Convertir le payload décodé en objet JSON
    const decodedPayload = JSON.parse(payloadJson);

    // Vérifier si le rôle est présent dans le payload
    const userRole = decodedPayload.role;

    if (!userRole) {
      // Si le rôle est absent, rediriger vers la page d'erreur (par exemple, page "accès refusé")
      router.navigateByUrl('/unauthorized');
      return false;
    }

    // Récupérer les rôles autorisés depuis les données de la route
    const allowedRoles = route.data['roles'] as Array<string>;

    // Vérifier si le rôle de l'utilisateur fait partie des rôles autorisés
    if (allowedRoles.includes(userRole)) {
      return true;  // L'utilisateur a l'un des rôles autorisés
    } else {
      // Si le rôle de l'utilisateur n'est pas autorisé, rediriger vers une page "accès refusé"
      router.navigateByUrl('/unauthorized');
      return false;
    }
  } catch (error) {
    // En cas d'erreur (par exemple, token mal formé), rediriger vers la page de connexion
    console.error('Token decoding error:', error);
    router.navigateByUrl('/login');
    return false;
  }
};
