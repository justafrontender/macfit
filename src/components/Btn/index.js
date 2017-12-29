import React from 'react';
import b from '../../lib/b';
import './style.scss';

const Btn = ({ className, bemMod, children }) => (
  <button
    className={b('btn', bemMod, className)}
  >
    {children}
  </button>
);

export default Btn;
