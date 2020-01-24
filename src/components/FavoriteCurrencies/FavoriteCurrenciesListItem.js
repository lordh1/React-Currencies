import React from 'react';
import PropTypes from 'prop-types';
import './FavoriteCurrenciesListItem.scss';

const FavoriteCurrenciesListItem = ({ data, onClick, isActive }) => {
  return (
    <span
      onClick={() => onClick(data.code)}
      onKeyPress={() => onClick(data.code)}
      className={`${'FavoriteCurrenciesListItem'}
      ${isActive ? 'FavoriteCurrenciesListItem__active' : ''}`}
      role="button"
      tabIndex="0"
    >
      {data.code}
    </span>
  );
};

FavoriteCurrenciesListItem.propTypes = {
  data: PropTypes.shape({
    code: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default FavoriteCurrenciesListItem;
