import { RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';

export const itemsReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_ONE_POKEMON:
      
      return Object.assign({}, state, action.pokemon.items);

    default:
      return state;
  }
};
