import { provideRouter } from '@angular/router';
import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './core/interceptor/auth-interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideHttpClient(
      withInterceptors([authInterceptor])
    ),
    importProvidersFrom(
      FormsModule,
      ReactiveFormsModule
    ),
  ]

};
