import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

export default class TextFieldExampleControlled extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: 'Property Value',
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <TextField
         floatingLabelText="Floating Label Text"
         id="text-field-controlled"
         value={this.state.value}
         onChange={this.handleChange}
        />
      </div>
    );
  }
}
