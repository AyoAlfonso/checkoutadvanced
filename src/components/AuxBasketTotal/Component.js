import React, { PropTypes } from 'react';
import './Component.css';

const AuxBasketTotal = ({ total }) => (
  <div className="app__auxbasket-total">
    {(total) + " Free Fruit Tea(s) For You!" }
  </div>
);

AuxBasketTotal.propTypes = {
  total: PropTypes.number.isRequired,
};

export default AuxBasketTotal;
