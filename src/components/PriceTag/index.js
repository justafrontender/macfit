import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const PriceTag = ({ price, weight }) => (
  <div className='price-tag'>
    <span className='price-tag__price'>{`${price}р.`}</span>
    <span className='price-tag__weight'>{`${weight}гр.`}</span>
  </div>
);

PriceTag.propTypes = {
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  weight: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

PriceTag.defaultProps = {
  weight: 0
};

export default PriceTag;
