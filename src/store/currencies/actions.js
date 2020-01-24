import * as currenciesTypes from './types';

export const CurrenciesFetch = () => ({
  type: currenciesTypes.CURRENCIES_FETCH,
});

export const CurrenciesSet = payload => ({
  type: currenciesTypes.CURRENCIES_SET,
  payload,
});

export const CurrenciesFlush = () => ({
  type: currenciesTypes.CURRENCIES_FLUSH,
});
