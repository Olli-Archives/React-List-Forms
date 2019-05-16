import React from 'react';
import CreateColor from './CreateColor';
import PropTypes from 'prop-types';

export default function PrintColor({ colorArray }){
  console.log('color array in print color', colorArray);
  const colors = colorArray.map((color, i)=>{
    return (
      <li key={`${color.name}${i}`}>
        <CreateColor color={color}/>
      </li>
    );
  });


  return (
    <ul>
      {colors}
    </ul>
  );


}
PrintColor.propTypes = {
  colorArray: PropTypes.array.isRequired
}
;
