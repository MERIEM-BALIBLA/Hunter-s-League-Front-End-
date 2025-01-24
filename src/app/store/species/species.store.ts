import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { SpeciesEffects } from './species.effects';
import { AppComponent } from '../../app.component';
import { reducer } from './species.reducer';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideStore({ species: reducer }), // Configure le store avec le reducer
    provideEffects([SpeciesEffects]) // Ajoute les effects
  ],
});
