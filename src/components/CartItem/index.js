import React from 'react';
import Link from 'react-router-dom/Link';
import CircleBtn from '../CircleBtn';
import './style.scss';

class CartItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleIncreaseQuantity = this.handleIncreaseQuantity.bind(this);
    this.handleDecreaseQuantity = this.handleDecreaseQuantity.bind(this);
  }

  handleDelete() {
    this.props.onDelete(this.props.item.productId);
  }

  handleIncreaseQuantity() {
    this.props.onChangeQuantity(this.props.item.productId, 1);
  }

  handleDecreaseQuantity() {
    this.props.onChangeQuantity(this.props.item.productId, -1);
  }

  render() {
    return (
      <li className='cart-item'>
        <Link className='cart-item__link' to={`/product/${this.props.item.good.code}`} tabIndex='-1'>
          <picture>
            <source
              media='(min-width: 768px)'
              srcSet={`${this.props.item.good.pictures[0].w368} 1x, ${this.props.item.good.pictures[0].w602} 2x`}
            />
            <img
              className='cart-item__image'
              src={this.props.item.good.pictures[0].w184}
              srcSet={`${this.props.item.good.pictures[0].w368} 2x`}
              alt={`Фотография ${this.props.item.good.name}`}
            />
          </picture>
        </Link>

        <div className='cart-item__specs'>
          <Link
            className='cart-item__title'
            to={`/product/${this.props.item.good.code}`}
          >
            {this.props.item.good.name}
          </Link>
          <div className='price-tag'>
            <span className='price-tag__price'>{this.props.item.good.price}р.</span>
            <span className='price-tag__weight'>{this.props.item.good.weight}гр.</span>
          </div>
        </div>

        <CircleBtn
          className='cart-item__btn-remove'
          bemMod={['small', 'x']}
          type='button'
          title='Удалить из заказа'
          onClick={this.handleDelete}
        >
          Удалить из заказа
        </CircleBtn>
        <label className='field-number'>
          <input
            className='field-number__input'
            type='text'
            value={`${this.props.item.quantity} шт.`}
            data-min='1'
            data-suffix=' шт.'
            data-value={this.props.item.quantity}
            data-step='1'
            readOnly
          />
          <CircleBtn
            className='field-number__btn-less'
            bemMod={['small', 'minus']}
            type='button'
            data-action='decrease'
            title='Уменьшить количество'
            tabIndex='-1'
            onClick={this.handleDecreaseQuantity}
          >
            -
          </CircleBtn>
          <CircleBtn
            className='field-number__btn-more'
            bemMod={['small', 'plus']}
            type='button'
            data-action='increase'
            title='Увеличить количество'
            tabIndex='-1'
            onClick={this.handleIncreaseQuantity}
          >
            +
          </CircleBtn>
        </label>
      </li>
    );
  }
}

export default CartItem;
