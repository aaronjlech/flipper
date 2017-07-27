import React from 'react';
import TextField from 'material-ui/TextField';

export default (props) => {

    return (
        <TextField

         floatingLabelText={props.label}
         name={props.name}
         value={props.value}
         onChange={props.handleChange}
        />
    );
  }
