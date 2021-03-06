import React from 'react';
import Counter from '../Counter';
import './style.scss';

const MenuToggler = ({ onClick, counter }) => (
  <button className='menu-toggler' type='button' onClick={onClick}>
    <Counter number={counter} classMix='menu-toggler__counter' />
  </button>
);

export default MenuToggler;
