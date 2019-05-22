import React from 'react';
import PropTypes from 'prop-types';

export default function PrintMessage({ message, color }){
  return <h2 style = {{ color:color }}>{message}</h2>;
}

PrintMessage.propTypes = {
  message: PropTypes.string,
  color: PropTypes.string.isRequired,
}
;
