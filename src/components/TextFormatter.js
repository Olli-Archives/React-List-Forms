import React, { PureComponent } from 'react';
import TextInputForm from './TextInputForm';
import PrintMessage from './PrintMessage';


export default class TextFormatter extends PureComponent {
  state = {
    text: '',
    message: ''
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

  render() {
    const { text, message } = this.state;
    return (
      <>
        <TextInputForm text={text} handleTextChange={this.handleTextChange} handleSubmit={this.handleSubmit} />
        <PrintMessage message={message}/>
      </>
    );
  }

}
