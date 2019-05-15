import React from 'react';
import PropTypes from 'prop-types';

export default function Colors({ colors }){
  const colorList = colors.map(color=>{
    return <li key={`${color.name}${color.hex}`}>name:{color.name}hex:{color.hex}rgb:red={color.rgb.red}green={color.rgb.green}blue={color.rgb.blue}</li>;
  });

  return (
    <ul>
      {colorList} 
    </ul>
  );
}

// colors.prototypes = {
//   name: PropTypes.string.isRequired,
//   hex: PropTypes.string.isRequired,
//   rgb: PropTypes.object.isRequired

// };
Colors.propTypes = {
  colors: PropTypes.array.isRequired
};
