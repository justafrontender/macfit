import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router-dom/BrowserRouter';
import { createStore } from 'redux';
// import { Provider } from 'react-redux';
import cartReducer from './reducers/cart';
import App from './components/App';
import deliveryTypes from './data/deliveryTypes';
import orderData from './data/order';
import siteMenu from './data/siteMenu';
import './style.scss';
import './favicons';

// temporarely include backend stub
import './static/api';

const cartStore = createStore(cartReducer, [{ productId: 1, quantity: 10 }]);

document.addEventListener(
  'DOMContentLoaded',
  () => {
    fetch('/api/catalog')
      .then(response => response.json())
      .then(catalog => {
        ReactDOM.render(
          <Router>
            <App
              catalog={catalog}
              deliveryTypes={deliveryTypes}
              cart={cartStore}
              orderFields={orderData}
              siteMenu={siteMenu}
            />
          </Router>,
          document.getElementById('root')
        );
      })
      .catch(() => {
        document.body.innerHTML = 'Loading error';
      });
  }
);
