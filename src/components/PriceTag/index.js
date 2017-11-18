import React from 'react';
import PropTypes from 'prop-types';

const PriceTag = ({ price, weight }) => (
  <div className='price-tag'>
    <span className='price-tag__price'>{`${price}р.`}</span>
    <span className='price-tag__weight'>{`${weight}гр.`}</span>
  </div>
);

PriceTag.propTypes = {
  price: PropTypes.number.isRequired,
  weight: PropTypes.number
}

PriceTag.defaultProps = {
  weight: 0
}

export default PriceTag;
