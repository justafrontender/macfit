import React from 'react';
import Counter from '../Counter';

const MenuToggler = ({ clickHandler, counter }) => (
  <button className='menu-toggler' type='button' onClick={clickHandler}>
    <Counter number={counter} classMix='menu-toggler__counter' />
    <i />
  </button>
);

export default MenuToggler;
