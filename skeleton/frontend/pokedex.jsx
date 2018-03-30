import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { HashRouter, Route } from 'react-router-dom';

import { fetchAllPokemon, fetchOnePokemon } from "./util/api_util";
import { receiveAllPokemon, requestAllPokemon , receiveOnePokemon, requestSinglePokemon } from './actions/pokemon_actions';
import { selectAllPokemon } from './reducers/selectors';

window.fetchOnePokemon = fetchOnePokemon;
window.receiveOnePokemon = receiveOnePokemon;
window.requestSinglePokemon = requestSinglePokemon;
window.store = configureStore();
window.selectAllPokemon = selectAllPokemon;

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const root = document.getElementById('root');
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={store} />,root);
});
