import React from 'react';
import PropTypes from 'prop-types';

export default function CreateColor({ color }) {

  const { name, hex, rgb } = color;

  return (
    <dl>
      <dt>name</dt>
      <dd>{name}</dd>
      <dt>hex:{name}</dt>
      <dd>{hex}</dd>
      <dt>RGB</dt>
      <dd>
        <p>red:{rgb.red}</p>
        <p>green:{rgb.green}</p>
        <p>blue:{rgb.blue}</p>
      </dd>
    </dl>
  );
}

CreateColor.propTypes = {
  color:PropTypes.object.isRequired
};
