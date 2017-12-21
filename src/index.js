import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router-dom/BrowserRouter';
import App from './components/App';
import catalogItems from './data/catalogItems';
import deliveryTypes from './data/deliveryTypes';
import orderData from './data/order';
import siteMenu from './data/siteMenu';
import './style.scss';
// eslint-disable-next-line
import '!dir-loader!./favicons/config.js';

document.addEventListener(
  'DOMContentLoaded',
  () => {
    ReactDOM.render(
      <Router>
        <App
          goodsList={catalogItems}
          deliveryTypes={deliveryTypes}
          orderData={orderData}
          siteMenu={siteMenu}
        />
      </Router>,
      document.getElementById('root')
    );
  }
);
