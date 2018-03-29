import { values} from 'lodash';

export const selectAllPokemon = (state) => (
  values(state.entities.pokemon)
  // Object.keys(state.entities.pokemon).map(id => (state.entities.pokemon[id]))

);
