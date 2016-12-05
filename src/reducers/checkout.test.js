import reducer, { addProduct, getTotal } from './checkout';

describe('reducer', function () {
  describe('initial state', function () {
    let initialState;

    beforeEach(function () {
      initialState = reducer(undefined, {});
    });

    it('should have an empty products array', function () {
      expect(initialState.products).toEqual([]);
    });
  });

  describe('ADD_PRODUCT', function () {
    let state = { products: [] };
    const productCode = 'AP1';

    beforeEach(function () {
      const action = addProduct({ productCode });
      state = reducer(state, action);
    });

    it('adds the product code to the array', function () {
      expect(state.products).toEqual(['AP1']);
    });
  });
});

describe('selectors', function () {
  describe('getTotal', function () {
    const state = { products: ['AP1', 'AP1', 'FR1', 'CF1']};
    let total;
    beforeEach(function () {
      total = getTotal(state);
    });

    it('should sum the products correctly', function () {
      expect(total).toEqual(24.34);
    })
  });
});