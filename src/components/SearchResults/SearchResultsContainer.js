import { connect } from 'react-redux';
import { getCardsForSearchResults } from '../../redux/cardsRedux';
import SearchResults from './SearchResults';

const mapStateToProps = (state) => {
  cards = getCardsForSearchResults(state, cardId), 

};

export default connect(mapStateToProps)(SearchResults);