import React from "react";
import "./CurrenciesListItem.scss";
import PropTypes from "prop-types";

const CurrenciesListItem = ({ data, no }) => {
  return (
    <div className="CurrenciesListItem">
      <div className="CurrenciesListItem__column">{no}</div>
      <div className="CurrenciesListItem__column">{data.currency}</div>
      <div className="CurrenciesListItem__column">{data.code}</div>
      <div className="CurrenciesListItem__column">{data.mid}</div>
    </div>
  );
};

CurrenciesListItem.propTypes = {
  data: PropTypes.object,
  no: PropTypes.number
};
CurrenciesListItem.propTypes = {
  data: PropTypes.object,
  no: PropTypes.number
};

export default CurrenciesListItem;
