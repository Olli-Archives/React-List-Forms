import React from 'react';
import PrintColor from './PrintColor';
import ColorHandler from './ColorHandler';

export default function App(){

  const color = [
    {
      name:'blue',
      hex:'test hex',
      rgb:{
        red:'red',
        green:'green',
        blue:'blue'
      }
    }
  ];


  return (
    <ColorHandler/>
  
  );

}
