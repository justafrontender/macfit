import React from 'react';
import find from 'lodash/find';
import NavLink from 'react-router-dom/NavLink';
import CartItem from '../CartItem';
import './style.scss';

class Cart extends React.Component {
  render() {
    const basket = this.props.basket.map(item => {
      item.good = find(this.props.products, ['id', item.productId]);
      return item;
    });

    return (
      <div className='cart'>
        {
          basket.length ?
            <ul className='cart__list'>
              {basket.map(item => (
                <CartItem
                  item={item}
                  key={item.productId}
                  onDelete={this.props.onItemDelete}
                  onChangeQuantity={this.props.onChangeQuantity}
                />
              ))}
            </ul> :
            <span className='cart__empty-text'>
              В корзине нет ни одного бургера.<br />Надо <NavLink to='/'>добавить</NavLink>!
            </span>
        }

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
