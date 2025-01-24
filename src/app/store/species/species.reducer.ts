import { createReducer, on } from '@ngrx/store';
import { Species } from '../../core/interface/species';
import { 
  loadSpecies, 
  loadSpeciesSuccess, 
  loadSpeciesFailure,
  addSpecies,
  addSpeciesSuccess,
  addSpeciesFailure 
} from './species.actions'; 

export const speciesFeatureKey = 'species';

export interface State {
  species: Species[],
  loading: boolean,
  error: any
}

export const initialState: State = {
  species: [],
  loading: false,
  error: null
};

export const reducer = createReducer(
  initialState,
  on(loadSpecies, state => ({
    ...state,
    loading: true
  })),
);

