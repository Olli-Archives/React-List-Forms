import Header from './Header';
import { shallow } from 'enzyme';
import React from 'react';

describe('Header component', ()=>{
  it('creates a header', ()=>{
    const title = 'test header';
    const wrapper = shallow(<Header title={title}/>);
    expect(wrapper).toMatchSnapshot();
  });
})
;
