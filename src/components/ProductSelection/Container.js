import ProductSelection from './Component';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addProduct } from '../../reducers/checkout.js';

const actionCreators = {
  addProduct,
};

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(actionCreators, dispatch)
);

export default connect(null, mapDispatchToProps)(ProductSelection);
