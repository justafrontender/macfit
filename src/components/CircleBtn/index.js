import React from 'react';
import b from '../../lib/b';
import './style.scss';

const CircleBtn = ({ className, bemMod, children, ...props }) => (
  <button
    className={b('circle-btn', bemMod, className)}
    {...props}
  >
    {children}
  </button>
);

export default CircleBtn;
