import React from 'react';
import PropTypes from 'prop-types';

const PlayerFunds = ({ funds }) => {
  return <h3>Player's funds {`£${funds}`}</h3>;
};

PlayerFunds.propTypes = {
  funds: PropTypes.number,
};

PlayerFunds.defaultProps = {
  funds: 100,
};

export default PlayerFunds;
