import React from 'react';
import Colors from './Colors';

export default function App(){

  const colors = [
    {
      name:'blue',
      hex:'#27636',
      rgb:{
        red:123,
        green:34,
        blue:65
      }
    },
    {
      name:'green',
      hex:'#2736',
      rgb:{
        red:13,
        green:374,
        blue:235
      }
    }
  ];

  return (
    <Colors colors={colors}/>
  );
}
