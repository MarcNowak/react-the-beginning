// selectors

// getSearchString
export const getSearchString = state => ({
  searchString: state.app.columns,
});

// countVisibleCards
export const countVisibleCards = ({cards, searchString}) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;

// countAllCards
export const countAllCards = ({cards}) => cards.length;

// action name creator

// actions types

// action creators

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}

