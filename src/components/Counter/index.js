import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ number, classMix }) => {
  return number ? <span className={`counter ${classMix}`}>{number}</span> : '';
};

Counter.propTypes = {
  number: PropTypes.number,
  classMix: PropTypes.string
};

Counter.defaultProps = {
  classMix: ''
};

export default Counter;
