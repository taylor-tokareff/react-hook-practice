import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {

  return (

    <button onClick={onClick}>Get Quote</button>
  );
};

Button.propTypes = {
  onClick: PropTypes.function.isRequired
};

export default Button;

