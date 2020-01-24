import * as React from 'react';
import PropTypes from 'prop-types';
import FavoriteCurrenciesListItem from './FavoriteCurrenciesListItem';
import './FavoriteCurrenciesList.scss';

const FavoriteCurrenciesList = ({
  currencies,
  favoriteCurrencies,
  onClick,
}) => {
  const checkIsActive = code => {
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
  currencies: PropTypes.shape({
    rates: PropTypes.array,
  }).isRequired,
  favoriteCurrencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FavoriteCurrenciesList;
