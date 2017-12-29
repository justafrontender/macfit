import React from 'react';
import PropTypes from 'prop-types';
import GoodTile from '../GoodTile';
import './style.scss';

const GoodsList = props => (
  <section className='goods-list'>
    <h2 className='goods-list__title'>{props.heading}</h2>

    {props.goods.map(item => {
      return (
        <GoodTile
          good={item}
          key={item.id}
          onAddToCart={props.onAddToCart}
        />
      );
    })}
  </section>
);

GoodsList.propTypes = {
  heading: PropTypes.string,
  goods: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
    weight: PropTypes.number
  }))
};

GoodsList.defaultProps = {
  heading: 'Меню MacFit',
};

export default GoodsList;
