import React from 'react';
import find from 'lodash/find';
import Redirect from 'react-router-dom/Redirect';
import Btn from '../Btn';
import './style.scss';

const GoodDetails = ({ goods, match }) => {
  const good = find(goods, ['code', match.params.productCode]);
  if (!good) {
    return <Redirect to='/' />;
  }

  return (
    <section className='good-details'>
      <div className='good-details__image'>
        <img src={good.pictures[0]} alt={good.name} width='100%' />
      </div>

      <div className='good-details__infopane'>
        <h2 className='good-details__title'>{good.name}</h2>
        <div className='price-tag price-tag--detailed'>
          <span className='price-tag__price'>{good.price}р.</span>
          <span className='price-tag__weight'>{good.weight}гр.</span>
        </div>

        <div className='good-details__description'>
          <p>{good.description}</p>
        </div>

        <Btn
          className='good-details__cart-btn'
          bemMod='to-cart'
          type='button'
          title='Добавить в заказ'
        >
          Добавить в заказ
        </Btn>
      </div>
    </section>
  );
};

export default GoodDetails;
