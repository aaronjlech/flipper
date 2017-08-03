import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


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
         open: false
      }
   }
   handleOpen = () => {
 this.setState({open: true});
};

handleClose = () => {
 this.setState({open: false});
};

render() {
 const actions = [
    <FlatButton
     label="Cancel"
     primary={true}
     onTouchTap={this.handleClose}
    />,
    <FlatButton
     label="SignUp"
     primary={true}
     onTouchTap={this.handleClose}
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
        This dialog spans the entire width of the screen.
     </Dialog>
    </div>
 );
}
}
