import React from 'react';
import { shallow } from 'enzyme';
import Photos from './Photos';

const photosArray = ['https://ichef.bbci.co.uk/news/936/cpsprodpb/E4CB/production/_95717585_happy.jpg', 'https://ichef.bbci.co.uk/news/936/cpsprodpb/E4CB/production/_95717585_happy.jpg', 'https://ichef.bbci.co.uk/news/936/cpsprodpb/E4CB/production/_95717585_happy.jpg'];

describe('Photos component', ()=>{
  it('renders a list of photos from an array', ()=>{
    const wrapper = shallow(<Photos photos={photosArray}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
