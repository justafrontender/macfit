import React from 'react';
import './style.scss';

const Alert = ({ buttons, children }) => (
  <section className='Alert'>
    <div className='Alert__children'>
      {children}
    </div>
    <div className='Alert__buttons'>
      {buttons}
    </div>
  </section>
);

export default Alert;
