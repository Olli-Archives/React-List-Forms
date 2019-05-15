import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';

export default function Photos({ photos }) {
  const photoList = photos.map((photo, i) => {
    return (
      <li key={i}>
        <Photo photo={photo} />
      </li>
    );
  });
  return <ul>{photoList}</ul>;
}

Photos.propTypes = {
  photos: PropTypes.array.isRequired
}
;
