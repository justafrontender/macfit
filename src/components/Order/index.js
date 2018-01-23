import React from 'react';
import PropTypes from 'prop-types';
import find from 'lodash/find';
import { changeQuantity, deleteItem } from '../../actions/cart';
import { update } from '../../actions/order';
import Cart from '../Cart';
import FieldText from '../FieldText';
import RadioGroup from '../RadioGroup';
import Radio from '../Radio';
import PageTitle from '../PageTitle';
import Btn from '../Btn';
import './style.scss';

class Order extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.store = this.context.store;

    this.handleItemDelete = this.handleItemDelete.bind(this);
    this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  componentDidMount() {
    this.unsubscribeStore = this.store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribeStore();
  }

  getBasketTotals() {
    return this.store.getState().cart.reduce(
      (sum, item) => {
        const good = find(this.props.catalog, i => i.id === item.productId);
        sum.count += item.quantity;
        sum.price += good.price * item.quantity;
        return sum;
      },
      { count: 0, price: 0 }
    );
  }

  handleItemDelete(productId) {
    this.store.dispatch(deleteItem(productId));
  }

  handleChangeQuantity(productId, amount) {
    this.store.dispatch(changeQuantity(productId, amount));
  }

  handleFieldChange(event) {
    const { name, value } = event.target;
    this.store.dispatch(update(name, value));
  }

  render() {
    const { cart, order } = this.store.getState();

    return (
      <form className='order' method='post'>
        <PageTitle>Ваш заказ</PageTitle>

        <Cart
          catalog={this.props.catalog}
          basket={cart}
          basketTotals={this.getBasketTotals()}
          onItemDelete={this.handleItemDelete}
          onChangeQuantity={this.handleChangeQuantity}
        />

        <div className='order__fields'>
          <RadioGroup
            title='Доставка:'
            name='deliveryType'
            onChange={this.handleFieldChange}
          >
            {this.props.deliveryTypes.map(deliveryType => (
              <Radio
                key={deliveryType.id}
                value={deliveryType.id}
                checked={deliveryType.id === order.deliveryType}
              >
                {deliveryType.name}
              </Radio>
            ))}
          </RadioGroup>

          <FieldText
            classMix='order__field'
            title='Ваш номер телефона:'
            type='tel'
            name='phoneNumber'
            placeholder='+79189999999'
            value={order.phoneNumber}
            onChange={this.handleFieldChange}
          />

          <FieldText
            classMix='order__field'
            title='Примечания к заказу:'
            type='textarea'
            name='note'
            placeholder='Например: пиццу сделайте острее, а фитбург без французской горчицы'
            value={order.note}
            onChange={this.handleFieldChange}
          />

          <Btn className='order__submit' type='button'>Сделать заказ</Btn>
        </div>
      </form>
    );
  }
}

Order.contextTypes = {
  store: PropTypes.shape({})
};

Order.propTypes = {
  deliveryTypes: PropTypes.arrayOf(PropTypes.shape({})),
  orderFields: PropTypes.shape({}),
  basket: PropTypes.arrayOf(PropTypes.shape({}))
};

export default Order;
