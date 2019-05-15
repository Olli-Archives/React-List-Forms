import TextFormatter from './TextFormatter';
import { shallow } from 'enzyme';
import React from 'react';

describe('TextFormatterComponent', ()=>{
  it('renders text on submit', ()=>{
    const wrapper = shallow(<TextFormatter/>);
    expect(wrapper).toMatchSnapshot();
  });
})
;
