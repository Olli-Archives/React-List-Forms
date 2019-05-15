import React from 'react';
import PropTypes from 'prop-types';
import Photos from './Photos';

export default function PhotoAlbum({ album }){
  const { title, photos } = album;

  return (
    <ul>
      <li><h1>{title}</h1></li>
      <Photos photos={photos}/>
    </ul>
  );
}

PhotoAlbum.propTypes = {
  album: PropTypes.object.isRequired
}
;
