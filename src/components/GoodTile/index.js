import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';
import Button from '../Button';
import PriceTag from '../PriceTag';
import './style.scss';

class GoodTile extends React.Component {
  constructor(props) {
    super(props);
    this.onAddToCart = this.onAddToCart.bind(this);
  }

  onAddToCart() {
    this.props.onAddToCart(this.props.good.id);
  }

  render() {
    return (
      <article className='good-tile' data-id={this.props.good.id}>
        <Link
          className='good-tile__link'
          to={`/product/${this.props.good.code}`}
          tabIndex='-1'
        >
          <picture>
            <source
              media='(min-width: 768px)'
              srcSet={`${this.props.good.pictures[0].w368} 1x, ${this.props.good.pictures[0].w602} 2x`}
            />
            <img
              className='good-tile__image'
              src={this.props.good.pictures[0].w184}
              srcSet={`${this.props.good.pictures[0].w368} 2x`}
              alt={`Фотография ${this.props.good.name}`}
            />
          </picture>
        </Link>
        <div className='good-tile__specs'>
          <h3 className='good-tile__title'>
            <Link to={`/product/${this.props.good.code}`}>{this.props.good.name}</Link>
          </h3>
          <PriceTag price={this.props.good.price} weight={this.props.good.weight} />
          <Button
            className='good-tile__basket-btn'
            title='Добавить в заказ'
            onClick={this.onAddToCart}
          >
            Добавить в заказ
          </Button>
        </div>
      </article>
    );
  }
}

GoodTile.propTypes = {
  good: PropTypes.shape({}).isRequired
};

export default GoodTile;
