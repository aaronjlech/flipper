import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import TextInput from '../components/TextInput'

import validator from 'validator';

const customContentStyle = {
  width: '100%',
  maxWidth: 'none'
};
const buttonStyle = {
   backgroundColor: 'rgba(255, 255, 255, .9)',
   position: 'absolute',
   bottom: '0',
   left: '0',
   width: '100%'
}

export default class SignUpModal extends Component {
   constructor(props) {
      super(props)
      this.state = {
         open: false,
         username: '',
         password: '',
         gender: 'none',
         repeatPassword: '',
         display_name: '',
      }
   }
   handleOpen = () => {
      this.setState({open: true});
   };
   handleSelect = (evt, index, value) => {
      this.setState({gender: value})
   }

   handleClose = () => {
      this.setState({open: false});
   };
   handleChange = (evt) => {
      const {username, display_name, password, repeatPassword, gender} = this.state;
         this.setState({[evt.target.name] : evt.target.value, disableSubmit: true})

   }
   handleSubmit = (evt) => {
      const { signupUser } = this.props;
      const {username, display_name, password, repeatPassword, gender} = this.state;
      evt.preventDefault();
      signupUser({
         username,
         display_name,
         password,
         gender
      })
   }

render() {
   const { username, password, repeatPassword, display_name, gender } = this.state

 const actions = [
    <FlatButton
     label="Cancel"
     primary={true}
     onTouchTap={this.handleClose}
    />,
    <FlatButton
      label="Sign Up"
      primary={true}
      disabled={!(username && display_name && password && repeatPassword && gender)}
      onTouchTap={this.handleSubmit}
    />,
 ];

 return (
    <div>
     <RaisedButton label="Sign up and Start flippn" onTouchTap={this.handleOpen} style={buttonStyle}/>
     <Dialog
        title="Sign up and Start flippn"
        actions={actions}
        modal={true}
        contentStyle={customContentStyle}
        open={this.state.open}
     >
      <form onSubmit={this.handleSubmit}>
         <TextInput
            key="username-signup"
            label="Email"
            type="text"
            name="username"
            value={username}
            handleChange={this.handleChange}
         />
         <TextInput
            key="display_name-signup"
            label="Display Name"
            type="text"
            name="display_name"
            value={display_name}
            handleChange={this.handleChange}
         />
         <TextInput
            key="password-signup"
            label="password"
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
         />
         <TextInput
            key="repeatPassword-signup"
            label="repeat password"
            type="password"
            name="repeatPassword"
            value={repeatPassword}
            handleChange={this.handleChange}
         />
         <SelectField
            style={{display: 'block', margin: '0 auto'}}
            floatingLabelText="Gender"
            floatingLabelStyle={{top: '20px'}}
            value={gender}
            name='gender'
            onChange={this.handleSelect}
         >
             <MenuItem value={'none'} primaryText="I choose not To Specify" />
             <MenuItem value={'female'} primaryText='Female' />
             <MenuItem value={'male'} primaryText="Male" />
         </SelectField>
      </form>

     </Dialog>
    </div>
 );
}
}
