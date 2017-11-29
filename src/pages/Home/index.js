import React from 'react';
import find from 'lodash/find';
import PageHeader from '../../components/PageHeader';
import PageContent from '../../components/PageContent';
import PageFooter from '../../components/PageFooter';
import Popup from '../../components/Popup';
import GoodsList from '../../components/GoodsList';
import GoodDetails from '../../components/GoodDetails';
import Order from '../../components/Order';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      orderFields: this.props.orderData.fields,
      basket: this.props.orderData.basket.map(basketItem => {
        const good = find(this.props.goodsList, ['id', basketItem.productId]);
        if (good) {
          basketItem.good = good;
        }
        else {
          // Написать удаление из корзины, если товар был удален из каталога
        }
        return basketItem;
      }),
    };
    this.state.basketTotals = this.getBasketTotals(this.state.basket);

    this.openGoodDetails = this.openGoodDetails.bind(this);
    this.openOrderPopup = this.openOrderPopup.bind(this);
    this.closePopup = this.closePopup.bind(this);
    this.updateOrderField = this.updateOrderField.bind(this);
    this.handleCartItemDelete = this.handleCartItemDelete.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  getBasketTotals(basket) {
    return basket.reduce(
      (sum, item) => {
        sum.items += item.quantity;
        sum.price += item.good.price * item.quantity;
        return sum;
      },
      { items: 0, price: 0 }
    );
  }

  openGoodDetails(event, key) {
    event.preventDefault();
    this.setState({
      openedPopup: 'good',
      popupContent: this.props.goodsList[key]
    });
  }

  openOrderPopup() {
    this.setState({ openedPopup: 'order' });
  }

  closePopup() {
    this.setState({
      openedPopup: false,
      popupContent: undefined
    });
  }

  updateOrderField(event) {
    const { name, value } = event.target;

    this.setState(prevState => {
      prevState.orderFields[name] = value;
      return { orderFields: prevState.orderFields };
    });
  }

  handleCartItemDelete(id) {
    this.setState(prevState => {
      prevState.basket = prevState.basket.filter(item => item.id !== id);
      return {
        basket: prevState.basket,
        basketTotals: this.getBasketTotals(prevState.basket)
      };
    });
  }

  handleAddToCart(productId) {
    this.setState(prevState => {
      let goodInBasket = false;

      prevState.basket = prevState.basket.map(item => {
        if (item.productId === productId) {
          item.quantity++;
          goodInBasket = true;
        }
        return item;
      });

      const newId = prevState.basket.length ? prevState.basket[prevState.basket.length - 1].id + 1 : 1;

      if (!goodInBasket) {
        prevState.basket.push({
          id: newId,
          productId,
          quantity: 1,
          options: null,
          good: find(this.props.goodsList, ['id', productId])
        });
      }

      return {
        basket: prevState.basket,
        basketTotals: this.getBasketTotals(prevState.basket)
      };
    });
    // иначе добавляем товар в корзину
  }

  render() {
    return (
      <div>
        <PageHeader siteMenu={this.props.siteMenu} basketItems={this.state.basketTotals.items} />

        <PageContent>
          <GoodsList
            goods={this.props.goodsList}
            openGoodDetails={this.openGoodDetails}
            onAddToCart={this.handleAddToCart}
          />
        </PageContent>

        <PageFooter />

        <button onClick={this.openOrderPopup} type='button'>Order</button>

        {
          (this.state.openedPopup === 'good') &&
          <Popup closePopup={this.closePopup}>
            <GoodDetails content={this.state.popupContent} />
          </Popup>
        }

        {
          (this.state.openedPopup === 'order') &&
          <Popup closePopup={this.closePopup}>
            <Order
              goods={this.props.goodsList}
              deliveryTypes={this.props.deliveryTypes}
              orderFields={this.state.orderFields}
              basket={this.state.basket}
              basketTotals={this.state.basketTotals}
              onOrderFieldChange={this.updateOrderField}
              onCartItemDelete={this.handleCartItemDelete}
            />
          </Popup>
        }

      </div>
    );
  }
}

export default Home;
