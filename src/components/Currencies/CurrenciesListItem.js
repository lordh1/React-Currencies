import React from 'react';
import './CurrenciesListItem.scss';
import PropTypes from 'prop-types';

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
  data: PropTypes.shape({
    currency: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    mid: PropTypes.number.isRequired,
  }).isRequired,
  no: PropTypes.number.isRequired,
};

export default CurrenciesListItem;
