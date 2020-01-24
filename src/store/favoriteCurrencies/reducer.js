import * as favoriteCurrenciesTypes from './types';

const favoriteCurrenciesInitState = [];

export const favoriteCurrenciesReducer = (
  state = favoriteCurrenciesInitState,
  action,
) => {
  switch (action.type) {
    case favoriteCurrenciesTypes.FAVORITE_CURRENCIES_TOGGLE:
      return state.includes(action.code)
        ? [...state.filter(item => item !== action.code)]
        : [...state, action.code];
    case favoriteCurrenciesTypes.FAVORITE_CURRENCIES_FLUSH:
      return favoriteCurrenciesInitState;
    default:
      return state;
  }
};
