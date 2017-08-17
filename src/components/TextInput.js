import React from "react";
import TextField from "material-ui/TextField";

export default props => {
   return (
      <TextField
         type={props.type}
         floatingLabelText={props.label}
         name={props.name}
         value={props.value}
         onChange={props.handleChange}
         style={{ display: "block", margin: "0 auto" }}
      />
   );
};
