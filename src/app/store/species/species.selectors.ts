import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State } from './species.reducer';

// Clé utilisée pour le feature state
export const selectSpeciesFeature = createFeatureSelector<State>('species');

// Selector pour obtenir toutes les espèces
export const selectAllSpecies = createSelector(
  selectSpeciesFeature,
  (state) => state.species
);

// Selector pour l'état de chargement
export const selectSpeciesLoading = createSelector(
  selectSpeciesFeature,
  (state) => state.loading
);

// Selector pour l'erreur
export const selectSpeciesError = createSelector(
  selectSpeciesFeature,
  (state) => state.error
);
