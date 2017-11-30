import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => (
  <Link className='logo' to='/'>
    <img src='img/logo.svg' alt='MacFit' />
  </Link>
);

export default Logo;
