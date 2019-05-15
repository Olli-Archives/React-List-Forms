import PhotoAlbum from './PhotoAlbum';
import { shallow } from 'enzyme';
import React from 'react';

const photosArray = ['https://ichef.bbci.co.uk/news/936/cpsprodpb/E4CB/production/_95717585_happy.jpg', 'https://ichef.bbci.co.uk/news/936/cpsprodpb/E4CB/production/_95717585_happy.jpg', 'https://ichef.bbci.co.uk/news/936/cpsprodpb/E4CB/production/_95717585_happy.jpg'];
const title = 'Best Album Ever';
const album = { 
  title:title,
  photos: photosArray
};



describe('PhotoAlbum component', ()=>{
  it('creates an album witha title and an array of images', ()=>{
    const wrapper = shallow(<PhotoAlbum album={album}/>);
    expect(wrapper).toMatchSnapshot();
  });
})
;
