import React from "react";
import "./FavoriteCurrenciesListItem.scss";
import PropTypes from "prop-types";

const FavoriteCurrenciesListItem = ({ data, onClick, isActive }) => {
  return (
    <span
      onClick={() => onClick(data.code)}
      className={`${"FavoriteCurrenciesListItem"}
        ${isActive ? "FavoriteCurrenciesListItem__active" : ""}`}
    >
      {data.code}
    </span>
  );
};

FavoriteCurrenciesListItem.propTypes = {
  data: PropTypes.object,
  onClick: PropTypes.func,
  isActive: PropTypes.bool
};

export default FavoriteCurrenciesListItem;
