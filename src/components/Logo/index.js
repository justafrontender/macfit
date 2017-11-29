import React from 'react';

const Logo = ({ href }) => (
  <a className='logo' href={href}>
    <img src='img/logo.svg' alt='MacFit' />
  </a>
);

export default Logo;
