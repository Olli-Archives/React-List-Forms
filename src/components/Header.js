import React from 'react';
import PropTypes from 'prop-types';

export default function Header({ title }){
  console.log('title in header',  title);
  return <li><h1>{title}</h1></li>;
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}; 
