import { values} from 'lodash';

export const selectAllPokemon = (state) => (
  values(state.entities.pokemon)
  // Object.keys(state.entities.pokemon).map(id => (state.entities.pokemon[id]))

);


export const selectOnePokemon = (state) => (
  // pojo of a single pokemon
  state.entities.pokemon
);

export const selectItems = (state) => (
  // array of items
  values(state.entities.items)
);
