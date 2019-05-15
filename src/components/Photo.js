import React from 'react';
import PropTypes from 'prop-types';

export default function Photo({ photo }){
  const photoToRender = photo;
  return (<img src={photoToRender}/>);
}


Photo.propTypes = {
  photo: PropTypes.string.isRequired
}
;
