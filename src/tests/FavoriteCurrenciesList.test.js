import React from 'react';
import { mount } from 'enzyme';
import { StoreContext } from 'redux-react-hook';
import configureStore from 'redux-mock-store';
import FavoriteCurrenciesList from '../components/FavoriteCurrencies/FavoriteCurrenciesList';

import FavoriteCurrenciesListItem from '../components/FavoriteCurrencies/FavoriteCurrenciesListItem';
import Currencies from '../containers/Currencies/Currencies';

const currencies = {
  table: 'A',
  no: '007/A/NBP/2020',
  effectiveDate: '2020-01-13',
  rates: [
    { currency: 'bat (Tajlandia)', code: 'THB', mid: 0.1261 },
    { currency: 'dolar amerykański', code: 'USD', mid: 3.8101 },
    { currency: 'dolar australijski', code: 'AUD', mid: 2.6312 },
    { currency: 'dolar Hongkongu', code: 'HKD', mid: 0.4903 },
    { currency: 'dolar kanadyjski', code: 'CAD', mid: 2.9176 },
    { currency: 'dolar nowozelandzki', code: 'NZD', mid: 2.5274 },
    { currency: 'dolar singapurski', code: 'SGD', mid: 2.829 },
    { currency: 'euro', code: 'EUR', mid: 4.2353 },
    { currency: 'forint (Węgry)', code: 'HUF', mid: 0.012645 },
    { currency: 'frank szwajcarski', code: 'CHF', mid: 3.917 },
    { currency: 'funt szterling', code: 'GBP', mid: 4.9432 },
    { currency: 'hrywna (Ukraina)', code: 'UAH', mid: 0.1593 },
    { currency: 'jen (Japonia)', code: 'JPY', mid: 0.034687 },
    { currency: 'korona czeska', code: 'CZK', mid: 0.1678 },
    { currency: 'korona duńska', code: 'DKK', mid: 0.5667 },
    { currency: 'korona islandzka', code: 'ISK', mid: 0.03087 },
    { currency: 'korona norweska', code: 'NOK', mid: 0.4285 },
    { currency: 'korona szwedzka', code: 'SEK', mid: 0.4006 },
    { currency: 'kuna (Chorwacja)', code: 'HRK', mid: 0.5688 },
    { currency: 'lej rumuński', code: 'RON', mid: 0.886 },
    { currency: 'lew (Bułgaria)', code: 'BGN', mid: 2.1655 },
    { currency: 'lira turecka', code: 'TRY', mid: 0.6501 },
    { currency: 'nowy izraelski szekel', code: 'ILS', mid: 1.0985 },
    { currency: 'peso chilijskie', code: 'CLP', mid: 0.004925 },
    { currency: 'peso filipińskie', code: 'PHP', mid: 0.0755 },
    { currency: 'peso meksykańskie', code: 'MXN', mid: 0.2029 },
    {
      currency: 'rand (Republika Południowej Afryki)',
      code: 'ZAR',
      mid: 0.2653,
    },
    { currency: 'real (Brazylia)', code: 'BRL', mid: 0.9302 },
    { currency: 'ringgit (Malezja)', code: 'MYR', mid: 0.938 },
    { currency: 'rubel rosyjski', code: 'RUB', mid: 0.0625 },
    { currency: 'rupia indonezyjska', code: 'IDR', mid: 0.00027879 },
    { currency: 'rupia indyjska', code: 'INR', mid: 0.053836 },
    { currency: 'won południowokoreański', code: 'KRW', mid: 0.003295 },
    { currency: 'yuan renminbi (Chiny)', code: 'CNY', mid: 0.5531 },
    { currency: 'SDR (MFW)', code: 'XDR', mid: 5.2674 },
  ],
};
const favoriteCurrencies = ['USD', 'EUR'];

const mockStore = configureStore();

describe('Currencies', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = mockStore({
      currencies,
      favoriteCurrencies,
    });

    store.dispatch = jest.fn();

    wrapper = mount(
      <StoreContext.Provider value={store}>
        <Currencies />
      </StoreContext.Provider>,
    );
  });

  it('FavoriteCurrenciesList component exists', () => {
    const item = wrapper.find(FavoriteCurrenciesList);
    expect(item).toHaveLength(1);
  });

  it('FavoriteCurrenciesListItem components count is 35', () => {
    const item = wrapper.find(FavoriteCurrenciesListItem);
    expect(item).toHaveLength(35);
  });

  it('FavoriteCurrenciesListItem - THB currency exists', () => {
    const item = wrapper.find(FavoriteCurrenciesListItem);
    expect(item.at(0).text()).toEqual('THB');
  });

  it('FavoriteCurrenciesListItem - THB currency is active', () => {
    const item = wrapper.find(FavoriteCurrenciesListItem);
    expect(item.at(0).props().isActive).toEqual(false);
  });

  it('FavoriteCurrenciesListItem - EUR currency exists', () => {
    const item = wrapper.find(FavoriteCurrenciesListItem);
    expect(item.at(1).text()).toEqual('USD');
  });

  it('FavoriteCurrenciesListItem - EUR currency is active', () => {
    const item = wrapper.find(FavoriteCurrenciesListItem);
    expect(item.at(1).props().isActive).toEqual(true);
  });

  it('matches snapshot', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
