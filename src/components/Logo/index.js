import React from 'react';
import Link from 'react-router-dom/Link';
import LogoImg from './img/logo.svg';
import './style.scss';

const Logo = () => (
  <Link className='logo' to='/'>
    <img src={LogoImg} alt='MacFit' />
  </Link>
);

export default Logo;
