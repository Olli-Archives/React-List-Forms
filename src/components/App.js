import React from 'react';
import PhotoAlbum from './PhotoAlbum';
import Footer from './Footer';

const photosArray = ['https://ichef.bbci.co.uk/news/936/cpsprodpb/E4CB/production/_95717585_happy.jpg', 'https://ichef.bbci.co.uk/news/936/cpsprodpb/E4CB/production/_95717585_happy.jpg', 'https://ichef.bbci.co.uk/news/936/cpsprodpb/E4CB/production/_95717585_happy.jpg'];
const title = 'Best Album Ever';
const album = { 
  title:title,
  photos: photosArray
};
const footerTitle = 'thanks';

export default function App(){
  return (
    <>
    <PhotoAlbum album={album}/>
    <Footer name={footerTitle}/>
    </>
  );
}
