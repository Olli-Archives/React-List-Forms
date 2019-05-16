import React from 'react';
import { shallow } from 'enzyme';
import CreateColor from './CreateColor';

describe('CreateColor component', ()=>{
  it('it creates a color with an object property', ()=>{
    const color = {
      name:'blue',
      rgb:{
        red:2,
        green:9,
        blue:44
      }
    };
    const wrapper = shallow(<CreateColor color={color}/>);
    expect(wrapper).toMatchSnapshot();
  });
})
;
