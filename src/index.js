import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import goodsList from './data/goods';

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(<App goodsList={goodsList}/>, document.getElementById('root'));
});
