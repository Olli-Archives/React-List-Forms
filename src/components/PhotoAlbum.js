import React from 'react';
import PropTypes from 'prop-types';
import Photos from './Photos';
import Header from './Header';

export default function PhotoAlbum({ album }){
  const { title, photos } = album;

  return (
    <ul>
      <Header title={title}/>
      <Photos photos={photos}/>
    </ul>
  );
}

PhotoAlbum.propTypes = {
  album: PropTypes.object.isRequired
}
;
