import React from 'react';

const Button = ({ className, type, title, text }) => (
  <button className={className} type={type} title={title}>{text}</button>
);

Button.defaultProps = {
  type: 'button',
  title: '',
  text: '',
  className: ''
}

export default Button;
