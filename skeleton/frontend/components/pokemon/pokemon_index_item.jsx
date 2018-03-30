import React from 'react';
import { Link } from 'react-router-dom';
import PokemonDetail from './pokemon_detail';


class PokemonIndexItem extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {
    const {pokemon} = this.props;
    return (
      <li>
        { pokemon.name }
        <Link to={`/pokemon/${pokemon.id}`}>
          <img src={ pokemon.image_url } />
        </Link>
      </li>
    );
  }

}


export default PokemonIndexItem;
