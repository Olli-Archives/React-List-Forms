import React from 'react';
import { shallow } from 'enzyme';
import SideBar from './Sidebar';

describe('SideBar component', ()=>{
  it('renders side bar and its children', ()=>{
    const wrapper = shallow(<SideBar><h2>im a child!</h2></SideBar>);
    expect(wrapper).toMatchSnapshot();
  });
})
;
