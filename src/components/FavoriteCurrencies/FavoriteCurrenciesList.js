import * as React from "react";
import FavoriteCurrenciesListItem from "./FavoriteCurrenciesListItem";
import "./FavoriteCurrenciesList.scss";
import PropTypes from "prop-types";

const FavoriteCurrenciesList = ({ currencies, favoriteCurrencies, onClick }) => {
  const checkIsActive = (code) => {
    return !!favoriteCurrencies.includes(code);
  };

  return (
    <div className="FavoriteCurrenciesList">
      <h2>Please click on the currency to follow/unfollow it</h2>
      {currencies.rates.map((item, key) => (
        <FavoriteCurrenciesListItem
          data={item}
          key={`${key.toString()}${item.code}`}
          no={key + 1}
          onClick={onClick}
          isActive={checkIsActive(item.code)}
        />
      ))}
    </div>
  );
};

FavoriteCurrenciesList.propTypes = {
  currencies: PropTypes.object,
  favoriteCurrencies: PropTypes.array,
  onClick: PropTypes.func
};

export default FavoriteCurrenciesList;
