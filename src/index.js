import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import App from './components/App';
import { Provider } from 'react-redux';
import './index.css';

import checkout from './reducers/checkout'

const store = createStore(checkout, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}

render();
store.subscribe(render);