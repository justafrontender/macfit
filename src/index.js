import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router-dom/BrowserRouter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { update } from './actions/order';
import App from './components/App';
import deliveryTypes from './data/deliveryTypes';
import contacts from './data/contacts';
import orderData from './data/order';
import siteMenu from './data/siteMenu';
import './scss/global.scss';
import './favicons';

// temporarely include backend stub
import './static/api';

const store = createStore(reducer);
Object.entries(orderData).forEach(([field, value]) => {
  store.dispatch(update(field, value));
});

document.addEventListener(
  'DOMContentLoaded',
  () => {
    fetch('/api/catalog')
      .then(response => response.json())
      .then(catalog => {
        ReactDOM.render(
          <Provider store={store}>
            <Router>
              <App
                catalog={catalog}
                deliveryTypes={deliveryTypes}
                contacts={contacts}
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
