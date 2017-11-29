import React from 'react';

const GoodDetails = ({ content }) => (
  <section className='good-details'>
    <div className='good-details__image'>
      <img src={content.pictures[0]} alt={content.name} width='100%' />
    </div>

    <div className='good-details__infopane'>
      <h2 className='good-details__title'>{content.name}</h2>
      <div className='price-tag price-tag--detailed'>
        <span className='price-tag__price'>{content.price}р.</span>
        <span className='price-tag__weight'>{content.weight}гр.</span>
      </div>

      <div className='good-details__description'>
        <p>{content.description}</p>
      </div>

      <button
        className='btn btn--to-cart good-details__cart-btn'
        type='button'
        title='Добавить в заказ'
      >
        Добавить в заказ
      </button>
    </div>
  </section>
);

export default GoodDetails;
