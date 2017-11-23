import React from 'react';

const CartItem = ({ basketItem, i }) => (
  <li className='cart-item'>
    <a className='cart-item__image js__open-popup' href='#' tabIndex='-1'>
      <img src={basketItem.good.pictures[0]} alt={basketItem.good.name} />
    </a>

    <div className='cart-item__specs'>
      <a className='cart-item__title js__open-popup' href='#'>{basketItem.good.name}</a>
      <div className='price-tag'>
        <span className='price-tag__price'>{basketItem.good.price}р.</span>
        <span className='price-tag__weight'>{basketItem.good.weight}гр.</span>
      </div>
    </div>

    <button className='circle-btn circle-btn--small circle-btn--x cart-item__btn-remove' type='button' title='Удалить из заказа'>Удалить из заказа</button>
    <label className='field-number'>
      <input className='field-number__input' type='text' value={`${basketItem.quantity} шт.`} data-min='1' data-suffix=' шт.' data-value={basketItem.quantity} data-step='1' readOnly />
      <button className='field-number__btn-less circle-btn circle-btn--small circle-btn--minus js__field-number--modify' type='button' data-action='decrease' title='Уменьшить количество' tabIndex='-1'>-</button>
      <button className='field-number__btn-more circle-btn circle-btn--small circle-btn--plus js__field-number--modify' type='button' data-action='increase' title='Увеличить количество' tabIndex='-1'>+</button>
    </label>
  </li>
);

export default CartItem;
