import React from 'react';
import PropTypes from 'prop-types';


export default function Footer({ name }){
  return <footer>{name}</footer>;
}


Footer.propTypes = {
  name: PropTypes.string.isRequired
}
;
