import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router-dom/BrowserRouter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import App from './components/App';
import deliveryTypes from './data/deliveryTypes';
import contacts from './data/contacts';
import orderData from './data/order';
import siteMenu from './data/siteMenu';
import './scss/global.scss';
import './favicons';

// temporarely include backend stub
import './static/api';

const cartStore = createStore(reducer);

document.addEventListener(
  'DOMContentLoaded',
  () => {
    fetch('/api/catalog')
      .then(response => response.json())
      .then(catalog => {
        ReactDOM.render(
          <Provider store={cartStore}>
            <Router>
              <App
                catalog={catalog}
                deliveryTypes={deliveryTypes}
                contacts={contacts}
                orderFields={orderData}
                siteMenu={siteMenu}
              />
            </Router>
          </Provider>,
          document.getElementById('root')
        );
      })
      .catch(() => {
        document.body.innerHTML = 'Loading error';
      });
  }
);
