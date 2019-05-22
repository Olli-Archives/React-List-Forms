import Good from './Good';
import { shallow } from 'enzyme';
import React from 'react';

describe('Good component', ()=>{
  it('returns html', ()=>{
    const wrapper = shallow(<Good/>);
    expect(wrapper).toMatchSnapshot();
  });
})
;
