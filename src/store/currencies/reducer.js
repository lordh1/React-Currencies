import * as LibraryTypes from './types';

export const currenciesInitState = {
  rates: [],
};

export const currenciesReducer = (state = currenciesInitState, action) => {
  switch (action.type) {
    case LibraryTypes.CURRENCIES_SET:
      return action.payload;
    case LibraryTypes.CURRENCIES_FLUSH:
      return currenciesInitState;
    default:
      return state;
  }
};
