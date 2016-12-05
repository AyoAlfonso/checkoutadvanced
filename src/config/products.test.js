import { getProductCodes, getProductName, getProductValue } from './products';

describe('getProductCodes', function () {
  it('returns the codes in order', () => {
    const codes = getProductCodes();
    expect(codes).toEqual(['AP1', 'CF1', 'FR1']);
  });
});

describe('getProductName', function () {
  it('returns the product name', () => {
    const name = getProductName('CF1');
    expect(name).toEqual('Coffee');
  });
});

describe('getProductValue', function () {
  it('returns the product value', () => {
    const name = getProductValue('AP1');
    expect(name).toEqual(5.00);
  });
});