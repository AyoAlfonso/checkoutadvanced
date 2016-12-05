import BasketItems from './Component';
import { connect } from 'react-redux';
import { getProducts } from '../../reducers/checkout.js';

const mapStateToProps = (state) => ({
  products: getProducts(state),
});

export default connect(mapStateToProps)(BasketItems);
