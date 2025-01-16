import { createAction, props } from '@ngrx/store';
import { Species } from '../../service/species/species.service';

// Load actions
export const loadSpecies = createAction('[Species] Load Species');

export const loadSpeciesSuccess = createAction('[Species] Load Species Success',props<{ species: Species[] }>());

export const loadSpeciesFailure = createAction('[Species] Load Species Failure',props<{ error: any }>());

// Add actions
export const addSpecies = createAction('[Species] Add Species',props<{ species: Species }>());

export const addSpeciesSuccess = createAction('[Species] Add Species Success',props<{ species: Species }>());

export const addSpeciesFailure = createAction('[Species] Add Species Failure',props<{ error: any }>());