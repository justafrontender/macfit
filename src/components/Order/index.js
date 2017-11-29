import React from 'react';
import PropTypes from 'prop-types';
import Cart from '../Cart';
import FieldText from '../FieldText';
import RadioGroup from '../RadioGroup';
import Radio from '../Radio';

class Order extends React.Component {
  render() {
    return (
      <form className='order' method='post'>
        <div className='container container--space'>
          <h2>Ваш заказ</h2>

          <Cart
            basket={this.props.basket}
            basketTotals={this.props.basketTotals}
            onCartItemDelete={this.props.onCartItemDelete}
          />

          <div className='order__fields'>
            <RadioGroup
              title='Доставка:'
              name='deliveryType'
              onChange={this.props.onOrderFieldChange}
            >
              {this.props.deliveryTypes.map(deliveryType => (
                <Radio
                  key={deliveryType.id}
                  value={deliveryType.id}
                  checked={deliveryType.id === this.props.orderFields.deliveryType}
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
              value={this.props.orderFields.phoneNumber}
              onChange={this.props.onOrderFieldChange}
            />

            <FieldText
              classMix='order__field'
              title='Примечания к заказу:'
              type='textarea'
              name='note'
              placeholder='Например: пиццу сделайте острее, а фитбург без французской горчицы'
              value={this.props.orderFields.note}
              onChange={this.props.onOrderFieldChange}
            />

            <button className='btn order__submit' type='button'>Сделать заказ</button>
          </div>
        </div>
      </form>
    );
  }
}

Order.propTypes = {
  deliveryTypes: PropTypes.arrayOf(PropTypes.shape({})),
  orderFields: PropTypes.shape({}),
  basket: PropTypes.arrayOf(PropTypes.shape({})),
  onOrderFieldChange: PropTypes.func.isRequired
};

export default Order;
