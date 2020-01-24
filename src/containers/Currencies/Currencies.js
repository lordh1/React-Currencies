import * as React from 'react';
import { useDispatch, useMappedState } from 'redux-react-hook';
import './Currencies.scss';
import { bindActionCreators } from 'redux';
import CurrenciesList from '../../components/Currencies/CurrenciesList';
import FavoriteCurrenciesList from '../../components/FavoriteCurrencies/FavoriteCurrenciesList';
import * as favoriteCurrenciesActions from '../../store/favoriteCurrencies/actions';

const mapState = state => ({
  currencies: state.currencies,
  favoriteCurrencies: state.favoriteCurrencies,
});

const Currencies = () => {
  const dispatch = useDispatch();
  const { currencies, favoriteCurrencies } = useMappedState(mapState);
  const boundFavoriteCurrenciesActions = bindActionCreators(
    favoriteCurrenciesActions,
    dispatch,
  );

  const favoriteCurrenciesToggle = code => {
    boundFavoriteCurrenciesActions.FavoriteCurrenciesToggle(code);
  };

  return (
    <div className="Currencies">
      <h1>Currencies</h1>
      <FavoriteCurrenciesList
        currencies={currencies}
        favoriteCurrencies={favoriteCurrencies}
        onClick={favoriteCurrenciesToggle}
      />
      <CurrenciesList
        currencies={currencies}
        favoriteCurrencies={favoriteCurrencies}
      />
    </div>
  );
};

export default Currencies;
