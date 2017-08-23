import React, { Component } from "react";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import Avatar from "material-ui/Avatar";
import { List, ListItem } from "material-ui/List";
import Subheader from "material-ui/Subheader";
import Divider from "material-ui/Divider";
import RequestsIcon from "./RequestsIcon";
import Popover from "material-ui/Popover";
import IconButton from 'material-ui/IconButton';
import CancelIcon from "material-ui/svg-icons/navigation/cancel";
import CheckIcon from "material-ui/svg-icons/navigation/check";
export default class RequestsMenu extends Component {
   constructor(props) {
      super(props);
      this.state = {
         open: false
      };
   }
   handleTouchTap = event => {
      // This prevents ghost click.
      event.preventDefault();

      this.setState({
         open: true,
         anchorEl: event.currentTarget
      });
   };

   handleRequestClose = () => {
      this.setState({
         open: false
      });
   };

   render() {
      const { user } = this.props;
      return (
         <div>
            <RequestsIcon user={user} onClick={this.handleTouchTap} />
            <Popover
               open={this.state.open}
               anchorEl={this.state.anchorEl}
               anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
               targetOrigin={{ horizontal: "left", vertical: "top" }}
               onRequestClose={this.handleRequestClose}
            >
               <List style={{width: '300px'}}>
                  <Subheader>Friend Requests</Subheader>
                  {user.friend_requests.map(friend => {
                     console.log(friend);
                     return (
                        <ListItem
                           key={friend._id}
                           leftAvatar={<Avatar src={friend.avatar_img} />}
                           primaryText={friend.display_name}
                           rightIconButton={
                              <div className="grid-x">
                                 <IconButton
                                    onClick={()=> this.props.handleAccept(friend._id)}
                                    >
                                    <CheckIcon color="rgb(77, 208, 225)" />
                                 </IconButton>
                                 <IconButton>
                                    <CancelIcon color="#E57373" onClick={()=> this.props.handleDecline(friend._id)}/>
                                 </IconButton>
                              </div>
                           }
                        />
                     );
                  })}
                  {!user.friend_requests.length
                     ? <ListItem
                          leftAvatar={<span></span>}
                          primaryText={"No requests"}
                          rightIconButton={<span></span>}
                       />
                     : null}
               </List>
            </Popover>
         </div>
      );
   }
}
