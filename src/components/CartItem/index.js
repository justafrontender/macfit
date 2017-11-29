import React from 'react';

class CartItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.onDelete(this.props.basketItem.id);
  }

  render() {
    return (
      <li className='cart-item'>
        <a className='cart-item__image' tabIndex='-1'>
          <img src={this.props.basketItem.good.pictures[0]} alt={this.props.basketItem.good.name} />
        </a>

        <div className='cart-item__specs'>
          <a className='cart-item__title'>{this.props.basketItem.good.name}</a>
          <div className='price-tag'>
            <span className='price-tag__price'>{this.props.basketItem.good.price}р.</span>
            <span className='price-tag__weight'>{this.props.basketItem.good.weight}гр.</span>
          </div>
        </div>

        <button
          className='circle-btn circle-btn--small circle-btn--x cart-item__btn-remove'
          type='button'
          title='Удалить из заказа'
          onClick={this.handleDelete}
        >
          Удалить из заказа
        </button>
        <label className='field-number'>
          <input
            className='field-number__input'
            type='text'
            value={`${this.props.basketItem.quantity} шт.`}
            data-min='1'
            data-suffix=' шт.'
            data-value={this.props.basketItem.quantity}
            data-step='1'
            readOnly
          />
          <button
            className='field-number__btn-less circle-btn circle-btn--small circle-btn--minus'
            type='button'
            data-action='decrease'
            title='Уменьшить количество'
            tabIndex='-1'
          >
            -
          </button>
          <button
            className='field-number__btn-more circle-btn circle-btn--small circle-btn--plus'
            type='button'
            data-action='increase'
            title='Увеличить количество'
            tabIndex='-1'
          >
            +
          </button>
        </label>
      </li>
    );
  }
}

export default CartItem;
