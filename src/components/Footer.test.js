import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

const myName = 'Olli Nieminen';

describe('Footer component', ()=>{
  it('renders name to footer', ()=>{
    const wrapper = shallow(<Footer name={myName}/>);
    expect(wrapper).toMatchSnapshot();
  });
})
;
