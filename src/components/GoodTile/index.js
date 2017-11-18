import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import PriceTag from '../PriceTag';

const GoodTile = ({ good, onTitleClick }) => (
  <article className='good-tile' data-id={good.id}>
    <a className='good-tile__image' href='#' tabIndex='-1' onClick={onTitleClick}>
      <img src={good.pictures[0]} alt={good.name}/>
    </a>
    <div className='good-tile__specs'>
      <h3 className='good-tile__title'>
        <a href='#' onClick={onTitleClick}>{good.name}</a>
      </h3>
      <PriceTag price={good.price} weight={good.weight} />
      <Button className='good-tile__basket-btn' title='Добавить в заказ'>Добавить в заказ</Button>
    </div>
  </article>
);

GoodTile.propTypes = {
  good: PropTypes.object.isRequired,
  onTitleClick: PropTypes.func.isRequired
}

export default GoodTile;
