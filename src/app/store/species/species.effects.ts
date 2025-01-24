import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SpeciesService } from '../../service/species/species.service';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { loadSpecies, loadSpeciesSuccess, loadSpeciesFailure } from './species.actions';

@Injectable()
export class SpeciesEffects {
  constructor(private actions$: Actions, private speciesService: SpeciesService) {}

  // Effet pour charger les espèces
  loadSpecies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSpecies), // Écoute l'action 'loadSpecies'
      mergeMap(() =>
        this.speciesService.getSpecies().pipe(
          map((response) => loadSpeciesSuccess({ species: response.content })), // Envoie l'action de succès
          catchError((error) => of(loadSpeciesFailure({ error }))) // Envoie l'action d'échec
        )
      )
    )
  );
}
