import * as CurrenciesTypes from './types';

export const currenciesInitState = {
  rates: [],
};

export const currenciesReducer = (state = currenciesInitState, action) => {
  switch (action.type) {
    case CurrenciesTypes.CURRENCIES_SET:
      return action.payload;
    case CurrenciesTypes.CURRENCIES_FLUSH:
      return currenciesInitState;
    default:
      return state;
  }
};
