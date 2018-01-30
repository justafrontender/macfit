import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router-dom/BrowserRouter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { restore as restoreCart } from './actions/cart';
import createStorage from './lib/localstorage.js';
import App from './components/App';
import deliveryTypes from './data/deliveryTypes';
import contacts from './data/contacts';
import siteMenu from './data/siteMenu';
import './scss/global.scss';
import './favicons';

// temporarely include backend stub
import './static/api';

const getInitialData = () => new Promise((resolve, reject) => {
  const data = {};

  const urls = {
    catalog: '/api/catalog',
    catalogSections: '/api/catalogSections'
  };

  ['catalog', 'catalogSections'].forEach((item, i) => {
    fetch(urls[item])
      .then(response => response.json())
      .then(obj => {
        data[item] = obj;
        if (i === 1) {
          resolve(data);
        }
      })
      .catch(e => reject(e));
  });
});

const store = createStore(reducer);
const storage = createStorage(store);

storage.restore('cart', restoreCart);
store.subscribe(() => storage.save('cart'));

document.addEventListener(
  'DOMContentLoaded',
  () => {
    getInitialData()
      .then(data => {
        return data;
      })
      .then(data => {
        ReactDOM.render(
          <Provider store={store}>
            <Router>
              <App
                catalog={data.catalog}
                catalogSections={data.catalogSections}
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
