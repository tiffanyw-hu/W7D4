import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import { selectOnePokemon, selectItems } from '../../reducers/selectors';

const mapStateToProps = state => ({
  pokemon: selectOnePokemon(state), // pojo
  items: selectItems(state) // array
});

const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
