import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import find from 'lodash/find';
import PageHeader from '../PageHeader';
import PageContent from '../PageContent';
import PageFooter from '../PageFooter';
import Popup from '../Popup';
import GoodsList from '../GoodsList';
import GoodDetails from '../GoodDetails';
import Order from '../Order';

class App extends React.Component {
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

    this.updateOrderField = this.updateOrderField.bind(this);
    this.handleCartItemDelete = this.handleCartItemDelete.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  componentDidMount() {
    // fetch('/api/catalog')
    //   .then(response => response.json())
    //   .then(catalog => console.log(catalog));
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
      <Router>
        <div>
          <PageHeader siteMenu={this.props.siteMenu} basketItems={this.state.basketTotals.items} />

          <PageContent>
            <Switch>
              <Route
                exact
                path='/'
                render={() => (
                  <GoodsList
                    goods={this.props.goodsList}
                    onAddToCart={this.handleAddToCart}
                  />
                )}
              />

              <Route
                path='/order/'
                render={() => (
                  <Order
                    goods={this.props.goodsList}
                    deliveryTypes={this.props.deliveryTypes}
                    orderFields={this.state.orderFields}
                    basket={this.state.basket}
                    basketTotals={this.state.basketTotals}
                    onOrderFieldChange={this.updateOrderField}
                    onCartItemDelete={this.handleCartItemDelete}
                  />
                )}
              />

              <Route
                path='/product/:productCode/'
                render={() => (
                  <GoodsList
                    goods={this.props.goodsList}
                    onAddToCart={this.handleAddToCart}
                  />
                )}
              />

              <Route
                render={() => <Redirect to='/' />}
              />
            </Switch>
          </PageContent>

          <PageFooter contacts={this.props.contacts} />

          <Route
            path='/product/:productCode/'
            render={props => (
              <Popup history={props.history}>
                <GoodDetails
                  goods={this.props.goodsList}
                  {...props}
                />
              </Popup>
            )}
          />

        </div>
      </Router>
    );
  }
}

export default withRouter(App);
