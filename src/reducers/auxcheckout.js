// ACTION TYPES
const ADD_PRODUCT = 'ADD_PRODUCT';

// PRODUCT TYPES
import { getProductFreebie } from '../config/products';

// INITIAL STATE
const initialState = {
  products: [],  
};

// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.productCode],
      };
    default:
      return state;
  }
};

// ACTION CREATORS
export const addProduct = ({ productCode }) => ({
  type: ADD_PRODUCT,
  productCode,
});

// SELECTORS
export const getProducts = (state) => (
  state.products
);

export const getTotal = (state) => (
  getProducts(state).reduce((total, current) => (
    total + getProductFreebie(current)
  ), 0)
);

export default reducer;
