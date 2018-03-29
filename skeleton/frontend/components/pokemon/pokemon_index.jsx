import React from 'react';

class PokemonIndex extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      this.props.requestAllPokemon();
    }

    render() {
      const { pokemon } = this.props;
      return (
        <div>
          <ul>
            {pokemon.map((el, i) => (
              <li key={el.id}>{el.name}
                <img src = {el.image_url} />
              </li>
            ))}
          </ul>
        </div>
      );
    }
}

export default PokemonIndex;
