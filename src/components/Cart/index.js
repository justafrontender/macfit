import React from 'react';
import CartItem from '../CartItem';
import find from 'lodash/find';

class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.itemsCount = 0;
    this.totalPrice = 0;
    this.basket = [];

    this.props.basket.map((basketItem, i) => {
      let good = find(this.props.goods, ['id', basketItem.productId]);
      if(good) {
        basketItem.good = good;
        this.basket.push(basketItem);
        this.totalPrice += (basketItem.quantity * good.price);
        this.itemsCount += basketItem.quantity;
      }
      else {
        // Здесь написать удаление из корзины, если товар был удален
      }
    });
  }

  render() {
    return (
      <div className='cart'>
        <ul className='cart__list'>
          {this.basket.map((basketItem, i) => <CartItem basketItem={basketItem} i={i} key={i}/>)}
        </ul>

        <div className='cart-summary'>
          <div className='cart-summary__row'>
            {'Всего на сумму: '}
            <span className='cart-summary__total-price'>{this.totalPrice}p.</span>
          </div>
        </div>
      </div>
    );
  }
}


Cart.defaultProps = {
  basket: [],
  goods: []
}

export default Cart;
