import React, { Component } from 'react';
import ProductSelection from './ProductSelection';
import BasketItems from './BasketItems';
import BasketTotal from './BasketTotal';
import AuxBasketTotal from './AuxBasketTotal';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <h1>TextMaster Supermarket</h1>
        </div>
        <p className="app-intro">
          Select Product to add to your basket
        </p>
        <ProductSelection />
        <BasketItems />
        <BasketTotal />
        <AuxBasketTotal/>
      </div>
    );
  }
}

export default App;
