import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

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
