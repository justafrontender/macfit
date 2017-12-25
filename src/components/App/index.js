import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import find from 'lodash/find';
import { addItem, changeQuantity, deleteItem } from '../../actions/cart';
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
      orderFields: this.props.orderFields,
      basket: this.props.cart.getState() === undefined ? [] : this.props.cart.getState(),
      basketTotals: this.getBasketTotals()
    };

    this.updateOrderField = this.updateOrderField.bind(this);
    this.handleCartItemDelete = this.handleCartItemDelete.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
  }

  componentDidMount() {
    this.unsubscribeCartStore = this.props.cart.subscribe(() => {
      this.setState({
        basket: this.props.cart.getState(),
        basketTotals: this.getBasketTotals()
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribeCartStore();
  }

  getBasketTotals() {
    const basket = this.props.cart.getState() === undefined ? [] : this.props.cart.getState();
    return basket.reduce(
      (sum, item) => {
        const good = find(this.props.catalog, i => i.id === item.productId);
        sum.items += item.quantity;
        sum.price += good.price * item.quantity;
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

  handleCartItemDelete(productId) {
    this.props.cart.dispatch(deleteItem(productId));
  }

  handleAddToCart(productId) {
    this.props.cart.dispatch(addItem(productId, 1));
  }

  handleChangeQuantity(productId, amount) {
    this.props.cart.dispatch(changeQuantity(productId, amount));
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
                    goods={this.props.catalog}
                    onAddToCart={this.handleAddToCart}
                  />
                )}
              />

              <Route
                path='/order/'
                render={() => (
                  <Order
                    goods={this.props.catalog}
                    deliveryTypes={this.props.deliveryTypes}
                    orderFields={this.state.orderFields}
                    basket={this.state.basket}
                    basketTotals={this.state.basketTotals}
                    onOrderFieldChange={this.updateOrderField}
                    onCartItemDelete={this.handleCartItemDelete}
                    onCartChangeQuantity={this.handleChangeQuantity}
                  />
                )}
              />

              <Route
                path='/product/:productCode/'
                render={() => (
                  <GoodsList
                    goods={this.props.catalog}
                    onAddToCart={this.handleAddToCart}
                  />
                )}
              />

              <Route
                render={() => <Redirect to='/' />}
              />
            </Switch>
          </PageContent>

          <PageFooter />

          <Route
            path='/product/:productCode/'
            render={props => (
              <Popup history={props.history}>
                <GoodDetails
                  goods={this.props.catalog}
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
