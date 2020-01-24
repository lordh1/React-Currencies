import * as favoriteCurrenciesTypes from './types';

export const FavoriteCurrenciesToggle = code => ({
  type: favoriteCurrenciesTypes.FAVORITE_CURRENCIES_TOGGLE,
  code,
});

export const FavoriteCurrenciesFlush = () => ({
  type: favoriteCurrenciesTypes.FAVORITE_CURRENCIES_FLUSH,
});
