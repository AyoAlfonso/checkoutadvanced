import AuxBasketTotal from './Component';
import { connect } from 'react-redux';
import { getTotal } from '../../reducers/auxcheckout.js';

const mapStateToProps = (state) => ({
  total: getTotal(state),
});

export default connect(mapStateToProps)(AuxBasketTotal);
