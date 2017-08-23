import React, { Component } from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import RequestsIcon from './RequestsIcon';
import Popover from 'material-ui/Popover';
import CancelIcon from 'material-ui/svg-icons/navigation/cancel';
import CheckIcon from 'material-ui/svg-icons/navigation/check';
export default class RequestsMenu extends Component {
   constructor(props){
      super(props)
      this.state = {
         open: false
      }
   }
   handleTouchTap = (event) => {
 // This prevents ghost click.
 event.preventDefault();

 this.setState({
    open: true,
    anchorEl: event.currentTarget,
 });
};

handleRequestClose = () => {
 this.setState({
    open: false,
 });
};


   render(){

      const { user } = this.props;
      console.log(user);
      return (

        <div>
<RequestsIcon user={user} onClick={this.handleTouchTap} />
     <Popover
       open={this.state.open}
       anchorEl={this.state.anchorEl}
       anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
       targetOrigin={{horizontal: 'left', vertical: 'top'}}
       onRequestClose={this.handleRequestClose}
     >
        <List>
       <Subheader>Friend Requests</Subheader>
       {user.friend_requests.map( (friend) => {
          return (
             <ListItem
                leftAvatar={<Avatar src={friend.avatar_img} />}

              primaryText={friend.username}
              rightIconButton={<span><CheckIcon color="rgb(77, 208, 225)"/><CancelIcon color="#E57373"/></span>}
             />
          )
       })}
    </List>
     </Popover>
   </div>


      )
   }
}
