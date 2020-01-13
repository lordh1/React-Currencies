import * as React from "react";
import { useDispatch, useMappedState } from "redux-react-hook";
import "./Currencies.scss";
import CurrenciesList from "../../components/Currencies/CurrenciesList";
import FavoriteCurrenciesList from "../../components/CurrenciesFavorite/FavoriteCurrenciesList";
import * as favoriteCurrenciesTypes from "../../store/favoriteCurrencies/types";

const mapState = (state) => ({
  currencies: state.currencies,
  favoriteCurrencies: state.favoriteCurrencies
});

const Currencies = () => {
  const dispatch = useDispatch();

  const { currencies, favoriteCurrencies } = useMappedState(mapState);

  const favoriteCurrenciesToggle = (code) => {
    dispatch({
      type: favoriteCurrenciesTypes.FAVORITE_CURRENCIES_TOGGLE,
      code: code
    });
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
