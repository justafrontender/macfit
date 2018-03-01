import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router-dom/BrowserRouter';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducer from './reducers';
import { restore as restoreCart } from './actions/cart';
import { get as getCatalog } from './actions/catalog';
import { get as getCatalogSections } from './actions/catalogSections';

import createStorage from './lib/localstorage.js';
import deliveryTypes from './data/deliveryTypes';
import catalogApi from './server/catalog';
import catalogSectionsApi from './server/catalogSections';
import contacts from './data/contacts';
import siteMenu from './data/siteMenu';

import App from './components/App';
import './scss/global.scss';
import './favicons';

// temporarely include backend stub
// import './static/api';

const store = createStore(reducer, applyMiddleware(thunk, logger));

const getInitialData = dispatch => Promise.all([
  catalogApi.get()
    .then(obj => {
      dispatch(getCatalog(obj));
    }),
  catalogSectionsApi.get()
    .then(obj => {
      dispatch(getCatalogSections(obj));
    })
]);

const storage = createStorage(store);

storage.restore('cart', restoreCart);
store.subscribe(() => storage.save('cart'));

getInitialData(store.dispatch)
  .then(() => {
    ReactDOM.render(
      <Provider store={store}>
        <Router>
          <App
            deliveryTypes={deliveryTypes}
            contacts={contacts}
            siteMenu={siteMenu}
          />
        </Router>
      </Provider>,
      document.getElementById('root')
    );
  })
  .catch(e => {
    document.body.innerHTML = `<h1>Sorry, we can't show you our app</h1><p>${e}</p>`;
  });
