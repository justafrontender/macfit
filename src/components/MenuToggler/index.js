import React from 'react';
import Counter from '../Counter';

const MenuToggler = ({ onClick, counter }) => (
  <button className='menu-toggler' type='button' onClick={onClick}>
    <Counter number={counter} classMix='menu-toggler__counter' />
    <i />
  </button>
);

export default MenuToggler;
