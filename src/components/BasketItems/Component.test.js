import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import BasketItems from './Component';
import sinon from 'sinon';
import { expect } from 'chai';
import { getProductName, getProductValue } from '../../config/products';
import formatCurrency from '../../formatCurrency';

describe('BasketItemsComponent', function () {
  let component;
  const products = ['AP1', 'AP1', 'CF1'];
  beforeEach(function () {
    component = shallow(<BasketItems products={products} />);
  });

  products.forEach(function(productCode, idx) {
    let productItemComponent;
    let expectedName = getProductName(productCode);
    let expectedValue = formatCurrency(getProductValue(productCode));

    beforeEach(function () {
      productItemComponent = component.find('li').at(idx);
    });

    it(`should have title ${expectedName} for ${productCode}`, function () {
      expect(productItemComponent).to.contain(expectedName);
    });
    
    it(`should have value ${expectedValue} for ${productCode}`, function () {
      expect(productItemComponent).to.contain(expectedValue);
    });
  });
});
