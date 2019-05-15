import React from 'react';
import { shallow } from 'enzyme';
import Colors from './Colors';

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

describe('Colors component', ()=>{
  it('renders ul with colors', ()=>{
    const wrapper = shallow(<Colors colors={colors}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
