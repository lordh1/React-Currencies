import * as React from "react";
import PropTypes from "prop-types";
import CurrenciesListItem from "./CurrenciesListItem";
import "./CurrenciesList.scss";
import { useEffect } from "react";
import { useState } from "react";

const CurrenciesList = ({ currencies, favoriteCurrencies }) => {
  const [currenciesList, setCurrenciesList] = useState([]);

  useEffect(() => {
    const list = [...currencies.rates];
    const filteredList = list.filter((item) =>
      favoriteCurrencies.includes(item.code)
    );
    setCurrenciesList(filteredList);
  }, [favoriteCurrencies, currencies]);

  return (
    <div className="CurrenciesList">
      <h2>Rates of your favorite currencies</h2>
      {currenciesList.length ? (
        <div className="CurrenciesList__header">
          <div>No</div>
          <div>Currency</div>
          <div>Code</div>
          <div>Mid</div>
        </div>
      ) : (
        <h4>You need to follow any currency</h4>
      )}
      {currenciesList.map((item, key) => (
        <CurrenciesListItem
          data={item}
          key={`${key.toString()}${item.code}`}
          no={key + 1}
        />
      ))}
    </div>
  );
};

CurrenciesList.propTypes = {
  currencies: PropTypes.object,
  favoriteCurrencies: PropTypes.array
};

export default CurrenciesList;
