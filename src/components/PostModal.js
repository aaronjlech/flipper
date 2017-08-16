import React from 'react';
import Dialog from 'material-ui/Dialog';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const customContentStyle = {
  width: '90%',
  maxWidth: 'none',
};

/**
 * The dialog width has been set to occupy the full width of browser through the `contentStyle` property.
 */
export default class PostModal extends React.Component {

   constructor(props) {
      super(props)
      this.state = {
         message: ''
      }
   }

   handleChange = (evt) => {
      this.setState({message: evt.target.value})
   }
   handleClose = () => {
      this.setState({message: ''})
      this.props.handleClose()

   }
   handleSubmit = (evt) => {
      evt.preventDefault();
      this.handleClose()
      this.props.createMessage(this.state.message)
      this.setState({message: ''})
   }

  render() {
      const { message } = this.state;
      const wordLength = 170 - message.length;
      const isFilled = wordLength <= 170 && message.length > 0 && wordLength > 0
      console.log(isFilled)
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={!isFilled}
        onTouchTap={this.handleSubmit}
      />,
    ];

    return (
      <div>
        <Dialog
          actions={actions}
          modal={true}
          contentStyle={customContentStyle}
          open={this.props.open}
        >
         <div className="message__user-info">
             <div className="user-info__avatar">
                 <Avatar src="https://randomuser.me/api/portraits/lego/4.jpg" size={50}/>
             </div>
             <div className="user-info__content">
                 <h4>@Bill</h4>
                 <p className="content__word-length">{wordLength}</p>
             </div>
         </div>
         <form onSubmit={this.handleSubmit}>
            <textarea disabled={message.length === 170} name="message" id="messageForm" cols="30" rows="10" placeholder="what's on your mind?" onChange={this.handleChange}></textarea>
         </form>
        </Dialog>
      </div>
    );
  }
}
