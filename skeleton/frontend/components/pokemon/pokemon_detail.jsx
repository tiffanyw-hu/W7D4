import React from 'react';

class PokemonDetail extends React.Component {

  componentDidMount() {
    let id = this.props.match.params.pokemonId;

    this.props.requestSinglePokemon(id);
  }

  componentWillReceiveProps (newProps) {
    let newId = newProps.match.params.pokemonId;
    let oldId = this.props.match.params.pokemonId;
    if (newId !== oldId) {
      this.props.requestSinglePokemon(newProps.match.params.pokemonId);
    }
  }

  render() {
    return (
      <p>Here is our Pokemon detail</p>
    );
  }
}

export default PokemonDetail;
