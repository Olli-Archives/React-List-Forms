import React, { PureComponent } from 'react';
import PrintColor from './PrintColor';


export default class ColorHandler extends PureComponent{
  state={
    color:'#a29a5d',
    r:0,
    b:54,
    g:78,
    colorArray:[]
  }

  handleNewColor = ({ color })=> {
    const newColorArray = [...this.state.colorArray,  color];
    this.setState({ colorArray: newColorArray });
  }
  handleOnSubmit = (e)=>{
    e.preventDefault();
    const color = {
      name: this.state.color,
      rgb:{
        red:this.state.r,
        green:this.state.g,
        blue:this.state.b
      }
    };
    const newColorArray = [...this.state.colorArray,  color];
    this.setState({ colorArray: newColorArray });
  }
  handleSelectedColor = ({ target })=>{
    this.setState({ color: target.value });
    this.convertToRBG();
  }

  convertToRBG = ()=>{
    const slicedColor = this.state.color.slice(1);
    const r = parseInt(slicedColor.slice(0, 2));
    const g = parseInt(slicedColor.slice(2, 4));
    const b = parseInt(slicedColor.slice(4, 6));
    this.setState({
      r:r,
      b:b,
      g:g
    });
  }



  render(){
    return (
      <>
      <form onSubmit={this.handleOnSubmit}>
        <input onChange={this.handleSelectedColor} type='color'></input>
        <button>Submit New Color</button>
      </form>  
      <PrintColor colorArray={this.state.colorArray}/>
      </>
    );
  }
}
