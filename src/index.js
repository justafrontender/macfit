import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import catalogItems from './data/catalogItems';
import deliveryTypes from './data/deliveryTypes';
import orderData from './data/order';
import siteMenu from './data/siteMenu';
import './style.scss';

document.addEventListener(
  'DOMContentLoaded',
  () => {
    ReactDOM.render(
      <App
        goodsList={catalogItems}
        deliveryTypes={deliveryTypes}
        orderData={orderData}
        siteMenu={siteMenu}
      />,
      document.getElementById('root')
    );
  }
);
