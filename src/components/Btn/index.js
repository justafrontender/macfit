import React from 'react';
import b from '../../lib/b';
import './style.scss';

const Btn = ({ className, bemMod, children, ...props }) => (
  <button
    className={b('btn', bemMod, className)}
    {...props}
  >
    {children}
  </button>
);

export default Btn;
