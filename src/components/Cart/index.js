import React from 'react';
import find from 'lodash/find';
import CartItem from '../CartItem';

class Cart extends React.Component {
  render() {
    const basket = this.props.basket.map(basketItem => {
      basketItem.good = find(this.props.catalog, ['id', basketItem.productId]);
      return basketItem;
    });

    return (
      <div className='cart'>
        <ul className='cart__list'>
          {basket.map(basketItem => (
            <CartItem
              basketItem={basketItem}
              key={basketItem.productId}
              onDelete={this.props.onItemDelete}
              onChangeQuantity={this.props.onChangeQuantity}
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
