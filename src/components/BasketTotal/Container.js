import BasketTotal from './Component';
import { connect } from 'react-redux';
import { getTotal } from '../../reducers/checkout.js';

const mapStateToProps = (state) => ({
  total: getTotal(state),
});

export default connect(mapStateToProps)(BasketTotal);



