import {connect} from 'react-redux';
import Column from './Column';

const mapStateToProps = (state, props) => ({
  columns: getCardsForColumn(state, props.id),
});

export const getCardsForColumn = ({columns}, cardId) => columns.filter(card => card.cardId == cardId);
export default connect(mapStateToProps)(Column);