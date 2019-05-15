import React from 'react';
import PropTypes from 'prop-types';

export default function PrintMessage({ message }){
  return <h2>{message}</h2>;
}

PrintMessage.propTypes = {
  message: PropTypes.string
}
;
