import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeQuantity, deleteItem } from '../../actions/cart';
import { update } from '../../actions/order';
import { getBasketTotals } from '../../reducers';
import Cart from '../Cart';
import FieldText from '../FieldText';
import RadioGroup from '../RadioGroup';
import Radio from '../Radio';
import PageTitle from '../PageTitle';
import Btn from '../Btn';
import './style.scss';

class Order extends React.Component {
  createOrder = evt => {
    evt.preventDefault();
    this.props.createOrder();
  }

  render() {
    const { cart, order, catalog, deliveryTypes, onItemDelete, onChangeQuantity, onFieldChange } = this.props;

    return (
      <form className='order' method='post' onSubmit={this.createOrder}>
        <PageTitle>Ваш заказ</PageTitle>

        <Cart
          catalog={catalog}
          basket={cart}
          basketTotals={getBasketTotals(cart, catalog)}
          onItemDelete={onItemDelete}
          onChangeQuantity={onChangeQuantity}
        />

        <div className='order__fields'>
          <RadioGroup
            title='Доставка:'
            name='deliveryType'
            onChange={onFieldChange}
          >
            {deliveryTypes.map(deliveryType => (
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
            onChange={onFieldChange}
          />

          <FieldText
            classMix='order__field'
            title='Примечания к заказу:'
            type='textarea'
            name='note'
            placeholder='Например: пиццу сделайте острее, а фитбург без французской горчицы'
            value={order.note}
            onChange={onFieldChange}
          />

          <Btn className='order__submit' type='submit'>Сделать заказ</Btn>
        </div>
      </form>
    );
  }
}

Order.propTypes = {
  deliveryTypes: PropTypes.arrayOf(PropTypes.shape({})),
  createOrder: PropTypes.func.isRequired,
  orderFields: PropTypes.shape({}),
  basket: PropTypes.arrayOf(PropTypes.shape({}))
};

const mapStateToProps = state => ({
  cart: state.cart,
  order: state.order
});
const mapDispatchToProps = dispatch => ({
  onItemDelete: productId => dispatch(deleteItem(productId)),
  onChangeQuantity: (productId, amount) => dispatch(changeQuantity(productId, amount)),
  onFieldChange: event => {
    const { name, value } = event.target;
    dispatch(update(name, value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);
