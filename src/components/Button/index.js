import React from 'react';

const Button = ({ className, type, title, text, onClick }) => (
  <button className={className} type={type} title={title} onClick={onClick}>{text}</button>
);

Button.defaultProps = {
  type: 'button',
  title: '',
  text: '',
  className: ''
};

export default Button;
