import React from 'react';
import Photos from './Photos';

const photosArray = ['https://ichef.bbci.co.uk/news/936/cpsprodpb/E4CB/production/_95717585_happy.jpg', 'https://ichef.bbci.co.uk/news/936/cpsprodpb/E4CB/production/_95717585_happy.jpg', 'https://ichef.bbci.co.uk/news/936/cpsprodpb/E4CB/production/_95717585_happy.jpg'];


export default function App(){
  return (<Photos photos={photosArray}/>);
}
