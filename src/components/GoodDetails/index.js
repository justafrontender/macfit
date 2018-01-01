import React from 'react';
import PropTypes from 'prop-types';
import find from 'lodash/find';
import findIndex from 'lodash/findIndex';
import Redirect from 'react-router-dom/Redirect';
import { addItem } from '../../actions/cart';
import Btn from '../Btn';
import './style.scss';

class GoodDetails extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.store = this.context.store;
    this.good = find(this.props.catalog, ['code', this.props.match.params.productCode]);

    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  componentDidMount() {
    this.unsubscribeStore = this.store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribeStore();
  }

  handleAddToCart() {
    this.store.dispatch(addItem(this.good.id, 1));
  }

  render() {
    const isAdded = findIndex(this.store.getState().cart, ['productId', this.good.id]);

    if (!this.good) {
      return <Redirect to='/' />;
    }
    return (
      <section className='good-details'>
        <div className='good-details__image'>
          <picture>
            <source
              media='(min-width: 700px)'
              srcSet={`${this.good.pictures[0].w1000} 1x, ${this.good.pictures[0].w1500} 2x`}
            />
            <source
              media='(min-width: 400px)'
              srcSet={`${this.good.pictures[0].w602} 1x, ${this.good.pictures[0].w1000} 2x`}
            />
            <img
              src={this.good.pictures[0].w368}
              srcSet={`${this.good.pictures[0].w602} 2x`}
              alt={`Фотография ${this.good.name}`}
              width='100%'
            />
          </picture>
        </div>

        <div className='good-details__infopane'>
          <h2 className='good-details__title'>{this.good.name}</h2>
          <div className='price-tag price-tag--detailed'>
            <span className='price-tag__price'>{this.good.price}р.</span>
            <span className='price-tag__weight'>{this.good.weight}гр.</span>
          </div>

          <div className='good-details__description'>
            <p>{this.good.description}</p>
          </div>

          <Btn
            className='good-details__cart-btn'
            bemMod='to-cart'
            type='button'
            title='Добавить в заказ'
            onClick={this.handleAddToCart}
          >
            {isAdded === -1 ? 'Добавить в заказ' : 'Добавить еще один'}
          </Btn>
        </div>
      </section>
    );
  }
}

GoodDetails.contextTypes = {
  store: PropTypes.shape({})
};

export default GoodDetails;
