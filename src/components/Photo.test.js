import React from 'react';
import Photo from './Photo';
import { shallow } from 'enzyme';

const photoUrl = 'test.url.com';

describe('Photo component', ()=>{
  it('renders photo', ()=>{
    const wrapper = shallow(<Photo photo={photoUrl}/>);
    expect(wrapper).toMatchSnapshot();
    
  });
})
;
