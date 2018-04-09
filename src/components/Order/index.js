import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import find from 'lodash/find';
import { changeQuantity, deleteItem } from '../../actions/cart';
import { create, update } from '../../actions/order';
import { getBasketTotals } from '../../reducers';
import Cart from '../Cart';
import FieldText from '../FieldText';
import RadioGroup from '../RadioGroup';
import Popup from '../Popup';
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
    const deliveryType = find(deliveryTypes, i => i.id === order.deliveryType);

    return (
      <Fragment>
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
              {deliveryTypes.map(delivery => (
                <Radio
                  key={delivery.id}
                  value={delivery.id}
                  checked={delivery.id === order.deliveryType}
                >
                  {delivery.name}
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

            {deliveryType && deliveryType.fields && deliveryType.fields.map(field => (
              <FieldText
                key={field.name}
                classMix='order__field'
                title={field.title}
                type={field.type}
                name={field.name}
                value={order[field.name]}
                onChange={onFieldChange}
              />
            ))}

            <Btn className='order__submit' type='submit'>Сделать заказ</Btn>
          </div>
        </form>
        {order.fetching && <Popup>Order Fetching</Popup>}
      </Fragment>
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
  catalog: state.catalog,
  cart: state.cart,
  order: state.order
});
const mapDispatchToProps = dispatch => ({
  createOrder: () => dispatch(create()),
  onItemDelete: productId => dispatch(deleteItem(productId)),
  onChangeQuantity: (productId, amount) => dispatch(changeQuantity(productId, amount)),
  onFieldChange: event => {
    const { name, value } = event.target;
    dispatch(update(name, value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);
