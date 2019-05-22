import React, { PureComponent } from 'react';
import TextInputForm from './TextInputForm';
import PrintMessage from './PrintMessage';
import ColorOptions from './ColorOptions';


export default class TextFormatter extends PureComponent {
  state = {
    text: '',
    message: '',
    color:'purple'
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ message: this.state.text });
    this.setState({ text: '' });
  }
  handleTextChange = ({ target }) => {
    const text = target.value;
    this.setState({ text: text });
  }
  handleColorChange = ({ target }) => {
    const color = target.value;
    this.setState({ color: color });
  }

  render() {
    const { 
      text,
      message,
      color } = this.state;

    return (
      <>
        <TextInputForm text={text} handleTextChange={this.handleTextChange} handleSubmit={this.handleSubmit} />
        <PrintMessage color={color} message={message}/>
        <ColorOptions handleColorChange={this.handleColorChange}/>
      </>
    );
  }

}
