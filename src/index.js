import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import MainComponent from './components/MainComponent';

render(
  <Provider store={store}>
    <MainComponent />
  </Provider>,
  document.getElementById('app')
);