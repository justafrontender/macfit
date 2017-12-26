import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router-dom/BrowserRouter';
import App from './components/App';
import deliveryTypes from './data/deliveryTypes';
import orderData from './data/order';
import siteMenu from './data/siteMenu';
import './style.scss';
import './favicons';

// temporarely include backend stub
import './static/api';

document.addEventListener(
  'DOMContentLoaded',
  () => {
    fetch('/api/catalog')
      .then(response => response.json())
      .then(catalog => {
        ReactDOM.render(
          <Router>
            <App
              goodsList={catalog}
              deliveryTypes={deliveryTypes}
              orderData={orderData}
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
