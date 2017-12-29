import React from 'react';
import CartItem from '../CartItem';
import './style.scss';

class Cart extends React.Component {
  render() {
    return (
      <div className='cart'>
        <ul className='cart__list'>
          {this.props.basket.map(basketItem => (
            <CartItem
              basketItem={basketItem}
              key={basketItem.id}
              onDelete={this.props.onCartItemDelete}
            />
          ))}
        </ul>

        <div className='cart-summary'>
          <div className='cart-summary__row'>
            {'Всего на сумму: '}
            <span className='cart-summary__total-price'>{this.props.basketTotals.price}p.</span>
          </div>
        </div>
      </div>
    );
  }
}

Cart.defaultProps = {
  basket: [],
  basketTotals: {}
};

export default Cart;
