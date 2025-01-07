import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  template: `
    <div class="min-h-screen flex bg-blue-200">
      <!-- Sidebar -->
      <div  class="w-20 " 
           class="bg-white shadow-lg border-r transition-all duration-300 relative bg-lime-200">      

        <!-- Menu Items -->
        <nav class="mt-6 px-2 py-14">
          <a routerLink="/home" 
             routerLinkActive="bg-blue-50 text-blue-600" 
             [routerLinkActiveOptions]="{exact: true}"
             class="flex items-center px-4 py-3 mb-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <span class="material-icons">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 100 100"><rect width="100" height="100" fill="none"/><path fill="#000" d="M2.5 12.5A2.5 2.5 0 0 0 0 15v70a2.5 2.5 0 0 0 2.5 2.5h95A2.5 2.5 0 0 0 100 85V15a2.5 2.5 0 0 0-2.5-2.5zm2.5 5h45.32l-.033 5.709l-16.68 27.607L5 64.092zm48.322 0H95v19.246l-25.982 8.397l-15.729-21.99zm-1.431 8.857l14.785 20.668l-5.862 11.106l-9.933 1.396l-14.147-8.084zM95 39.898V82.5h-7.232L63.637 59.213l5.84-11.067zM34.584 53.67l14.574 8.328L50.967 82.5H5V67.398zm26.686 7.426L83.447 82.5H53.98L52.2 62.371z" color="#000"/><path fill="#000" d="M61.366 68.73a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5m-28.13-10.37a11 10.9 0 0 0-11 10.9a11 10.9 0 0 0 11 10.898a11 10.9 0 0 0 11-10.898a11 10.9 0 0 0-11-10.9m49.955-10.268a10 9.908 0 0 0-10 9.908a10 9.908 0 0 0 10 9.909a10 9.908 0 0 0 10-9.909a10 9.908 0 0 0-10-9.908m-7.676-27.281a7.5 7.431 0 0 0-7.49 7.43a7.5 7.431 0 0 0 7.5 7.431a7.5 7.431 0 0 0 7.5-7.431a7.5 7.431 0 0 0-7.5-7.43a7.5 7.431 0 0 0-.01 0M53.272 40.664a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5M21.158 21.257a13.5 13.376 0 0 0-13.5 13.377a13.5 13.376 0 0 0 13.5 13.377a13.5 13.376 0 0 0 13.5-13.377a13.5 13.376 0 0 0-13.5-13.377" color="#000"/></svg>
            </span>
          </a>

          <a routerLink="/competitions" 
             routerLinkActive="bg-blue-50 text-blue-600"
             class="flex items-center px-4 py-3 mb-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <span class="material-icons">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><rect width="24" height="24" fill="none"/><path fill="#000" d="M19.538 3.723c-1.3 1.016-2.469 1.246-3.594 1.124c-1.18-.127-2.342-.64-3.638-1.218l-.053-.024c-1.235-.552-2.6-1.162-4.036-1.317c-1.511-.163-3.07.176-4.679 1.434a.75.75 0 0 0-.288.591V21a.75.75 0 0 0 1.5 0v-4.936c1.186-.835 2.264-1.023 3.306-.91c1.18.126 2.342.639 3.638 1.218l.053.023c1.235.553 2.6 1.162 4.036 1.317c1.511.163 3.07-.176 4.679-1.434a.75.75 0 0 0 .288-.591V4.313a.75.75 0 0 0-1.212-.59"/></svg>
            </span>
          </a>

          <a routerLink="/users" 
             routerLinkActive="bg-blue-50 text-blue-600"
             class="flex items-center px-4 py-3 mb-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <span class="material-icons">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><rect width="24" height="24" fill="none"/><circle cx="12" cy="6" r="4" fill="#000"/><path fill="#000" d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5" opacity="0.5"/></svg>
            </span>
          </a>

          <a routerLink="/species" 
             routerLinkActive="bg-blue-50 text-blue-600"
             class="flex items-center px-4 py-3 mb-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <span class="material-icons">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 32 32"><rect width="32" height="32" fill="none"/><path fill="#000" d="M8.5 6.75C8.5 4.876 9.777 3 11.75 3S15 4.876 15 6.75s-1.277 3.75-3.25 3.75S8.5 8.624 8.5 6.75M16 13a9 9 0 0 0-8.975 9.675c.142 1.914 1.265 3.276 2.703 4.122C11.143 27.63 12.905 28 14.555 28h2.89c1.65 0 3.412-.37 4.827-1.203c1.438-.846 2.56-2.208 2.703-4.122Q25 22.34 25 22a9 9 0 0 0-9-9m1-6.25C17 4.876 18.277 3 20.25 3s3.25 1.876 3.25 3.75s-1.277 3.75-3.25 3.75S17 8.624 17 6.75m7 4.5c0-1.874 1.277-3.75 3.25-3.75s3.25 1.876 3.25 3.75S29.223 15 27.25 15S24 13.124 24 11.25m-22.5 0c0-1.874 1.277-3.75 3.25-3.75S8 9.376 8 11.25S6.723 15 4.75 15S1.5 13.124 1.5 11.25"/></svg>
            </span>
          </a>

          <a routerLink="/hunt" 
             routerLinkActive="bg-blue-50 text-blue-600"
             class="flex items-center px-4 py-3 mb-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <span class="material-icons">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 512 512"><rect width="512" height="512" fill="none"/><path fill="#000" d="M430.8 28.36c-36.5-.71-144 71.74-134 89.74c10.6 19.2 44.3 36.9 55.1 33.2c85.4-29.4 94.7-116.16 86.5-121.11c-2-1.19-4.5-1.78-7.6-1.83m-349.64 0c-3.1 0-5.6.6-7.6 1.8c-8.2 4.9 1.1 91.74 86.34 121.14c10.8 3.7 44.5-14 55.1-33.2c10-18-97.4-90.54-133.84-89.74M36.85 193c-12 80.3 47.31 135.2 106.45 147.1c47.8 9.5 86-28.5 83.3-38.6c-6.8-25.7-134.94-100-189.75-108.5m438.25 0c-54.8 8.5-183.1 82.8-189.9 108.5c-2.7 10.1 35.5 48.1 83.3 38.6c59.3-11.9 118.6-66.8 106.6-147.1M93.16 378.8c-2.9.1-5.4.5-7.3 1.2c2.8 61.4 74.04 103.8 88.14 103.6c23.3-.3 46.1-22.4 46.5-38.5c.6-23-93.4-66.9-127.34-66.3m325.64 0c-34.1-.6-128.1 43.3-127.5 66.3c.4 16.1 23.2 38.2 46.5 38.5c14.1.2 85.5-42.2 88.3-103.6c-1.9-.7-4.4-1.1-7.3-1.2"/></svg>
            </span>
          </a>
        </nav>
      </div>

      <!-- Main Content -->
      <div class="flex-1 bg-gray-50">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: []
})
export class SideComponent {
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}

// <div class="min-h-screen flex bg-gray-50">
//       <!-- Sidebar -->
//       <div [class]="isOpen ? 'w-60' : 'w-20'" 
//            class="bg-white shadow-lg border-r transition-all duration-300 relative">
//         <!-- Toggle Button -->
//         <button (click)="toggle()" 
//                   class="text-gray-600 hover:bg-gray-100 p-2 rounded-full transition-colors duration-200 absolute top-1/2 right-[-30px] bg-white">
//             <!-- Si isOpen est vrai, afficher l'icône de fermeture, sinon l'icône d'ouverture -->
//             <ng-container *ngIf="isOpen; else openIcon">
//               <!-- Icone Close (SVG) -->
//               <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><rect width="24" height="24" fill="none"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m7 7l10 10M7 17L17 7"/></svg>
//             </ng-container>
//             <ng-template #openIcon>
//               <!-- Icone Open (SVG) -->
//               <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="2em" viewBox="0 0 12 24">
//                 <rect width="12" height="24" fill="none"/>
//                 <path fill="#000" fill-rule="evenodd" d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414"/>
//               </svg>
//             </ng-template>
//           </button>

//         <!-- Menu Items -->
//         <nav class="mt-6 px-2">
//           <a routerLink="/home" 
//              routerLinkActive="bg-blue-50 text-blue-600" 
//              [routerLinkActiveOptions]="{exact: true}"
//              class="flex items-center px-4 py-3 mb-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
//             <span class="material-icons">
//               <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 100 100"><rect width="100" height="100" fill="none"/><path fill="#000" d="M2.5 12.5A2.5 2.5 0 0 0 0 15v70a2.5 2.5 0 0 0 2.5 2.5h95A2.5 2.5 0 0 0 100 85V15a2.5 2.5 0 0 0-2.5-2.5zm2.5 5h45.32l-.033 5.709l-16.68 27.607L5 64.092zm48.322 0H95v19.246l-25.982 8.397l-15.729-21.99zm-1.431 8.857l14.785 20.668l-5.862 11.106l-9.933 1.396l-14.147-8.084zM95 39.898V82.5h-7.232L63.637 59.213l5.84-11.067zM34.584 53.67l14.574 8.328L50.967 82.5H5V67.398zm26.686 7.426L83.447 82.5H53.98L52.2 62.371z" color="#000"/><path fill="#000" d="M61.366 68.73a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5m-28.13-10.37a11 10.9 0 0 0-11 10.9a11 10.9 0 0 0 11 10.898a11 10.9 0 0 0 11-10.898a11 10.9 0 0 0-11-10.9m49.955-10.268a10 9.908 0 0 0-10 9.908a10 9.908 0 0 0 10 9.909a10 9.908 0 0 0 10-9.909a10 9.908 0 0 0-10-9.908m-7.676-27.281a7.5 7.431 0 0 0-7.49 7.43a7.5 7.431 0 0 0 7.5 7.431a7.5 7.431 0 0 0 7.5-7.431a7.5 7.431 0 0 0-7.5-7.43a7.5 7.431 0 0 0-.01 0M53.272 40.664a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5M21.158 21.257a13.5 13.376 0 0 0-13.5 13.377a13.5 13.376 0 0 0 13.5 13.377a13.5 13.376 0 0 0 13.5-13.377a13.5 13.376 0 0 0-13.5-13.377" color="#000"/></svg>
//             </span>
//             <span *ngIf="isOpen" class="ml-4 font-medium">Statics</span>
//           </a>

//           <a routerLink="/competitions" 
//              routerLinkActive="bg-blue-50 text-blue-600"
//              class="flex items-center px-4 py-3 mb-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
//             <span class="material-icons">
//               <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><rect width="24" height="24" fill="none"/><path fill="#000" d="M19.538 3.723c-1.3 1.016-2.469 1.246-3.594 1.124c-1.18-.127-2.342-.64-3.638-1.218l-.053-.024c-1.235-.552-2.6-1.162-4.036-1.317c-1.511-.163-3.07.176-4.679 1.434a.75.75 0 0 0-.288.591V21a.75.75 0 0 0 1.5 0v-4.936c1.186-.835 2.264-1.023 3.306-.91c1.18.126 2.342.639 3.638 1.218l.053.023c1.235.553 2.6 1.162 4.036 1.317c1.511.163 3.07-.176 4.679-1.434a.75.75 0 0 0 .288-.591V4.313a.75.75 0 0 0-1.212-.59"/></svg>
//             </span>
//             <span *ngIf="isOpen" class="ml-4 font-medium">Competitions</span>
//           </a>

//           <a routerLink="/users" 
//              routerLinkActive="bg-blue-50 text-blue-600"
//              class="flex items-center px-4 py-3 mb-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
//             <span class="material-icons">
//               <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><rect width="24" height="24" fill="none"/><circle cx="12" cy="6" r="4" fill="#000"/><path fill="#000" d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5" opacity="0.5"/></svg>
//             </span>
//             <span *ngIf="isOpen" class="ml-4 font-medium">Users</span>
//           </a>

//           <a routerLink="/species" 
//              routerLinkActive="bg-blue-50 text-blue-600"
//              class="flex items-center px-4 py-3 mb-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
//             <span class="material-icons">
//               <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 32 32"><rect width="32" height="32" fill="none"/><path fill="#000" d="M8.5 6.75C8.5 4.876 9.777 3 11.75 3S15 4.876 15 6.75s-1.277 3.75-3.25 3.75S8.5 8.624 8.5 6.75M16 13a9 9 0 0 0-8.975 9.675c.142 1.914 1.265 3.276 2.703 4.122C11.143 27.63 12.905 28 14.555 28h2.89c1.65 0 3.412-.37 4.827-1.203c1.438-.846 2.56-2.208 2.703-4.122Q25 22.34 25 22a9 9 0 0 0-9-9m1-6.25C17 4.876 18.277 3 20.25 3s3.25 1.876 3.25 3.75s-1.277 3.75-3.25 3.75S17 8.624 17 6.75m7 4.5c0-1.874 1.277-3.75 3.25-3.75s3.25 1.876 3.25 3.75S29.223 15 27.25 15S24 13.124 24 11.25m-22.5 0c0-1.874 1.277-3.75 3.25-3.75S8 9.376 8 11.25S6.723 15 4.75 15S1.5 13.124 1.5 11.25"/></svg>
//             </span>
//             <span *ngIf="isOpen" class="ml-4 font-medium">Species</span>
//           </a>

//           <a routerLink="/hunt" 
//              routerLinkActive="bg-blue-50 text-blue-600"
//              class="flex items-center px-4 py-3 mb-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
//             <span class="material-icons">
//               <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 512 512"><rect width="512" height="512" fill="none"/><path fill="#000" d="M430.8 28.36c-36.5-.71-144 71.74-134 89.74c10.6 19.2 44.3 36.9 55.1 33.2c85.4-29.4 94.7-116.16 86.5-121.11c-2-1.19-4.5-1.78-7.6-1.83m-349.64 0c-3.1 0-5.6.6-7.6 1.8c-8.2 4.9 1.1 91.74 86.34 121.14c10.8 3.7 44.5-14 55.1-33.2c10-18-97.4-90.54-133.84-89.74M36.85 193c-12 80.3 47.31 135.2 106.45 147.1c47.8 9.5 86-28.5 83.3-38.6c-6.8-25.7-134.94-100-189.75-108.5m438.25 0c-54.8 8.5-183.1 82.8-189.9 108.5c-2.7 10.1 35.5 48.1 83.3 38.6c59.3-11.9 118.6-66.8 106.6-147.1M93.16 378.8c-2.9.1-5.4.5-7.3 1.2c2.8 61.4 74.04 103.8 88.14 103.6c23.3-.3 46.1-22.4 46.5-38.5c.6-23-93.4-66.9-127.34-66.3m325.64 0c-34.1-.6-128.1 43.3-127.5 66.3c.4 16.1 23.2 38.2 46.5 38.5c14.1.2 85.5-42.2 88.3-103.6c-1.9-.7-4.4-1.1-7.3-1.2"/></svg>
//             </span>
//             <span *ngIf="isOpen" class="ml-4 font-medium">Hunt</span>
//           </a>
//         </nav>
//       </div>

//       <!-- Main Content -->
//       <div class="flex-1 bg-gray-50">
//         <router-outlet></router-outlet>
//       </div>
//     </div>