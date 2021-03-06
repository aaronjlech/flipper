import React from "react";
import Paper from "material-ui/Paper";
import Avatar from "material-ui/Avatar";
import FlatButton from "material-ui/FlatButton";
import FontIcon from 'material-ui/FontIcon';
import MessageIcon from "material-ui/svg-icons/communication/message";
import CheckIcon from 'material-ui/svg-icons/navigation/check';
function friendLabel(friendId, currentUser){
   if(currentUser.sent_requests.includes(friendId)) {
      return 'Request Sent'
   } else {
     let areFriends = currentUser.friends.find(f => f._id === friendId)
     if(areFriends) {
         return 'Friends!'
     }
      return 'Add Friend'
   }
}

const UserCard = props => {
    // const { currentUser, user } = props
   let label = friendLabel(props.user._id, props.currentUser)
   return (
      <Paper className="user-card small-12 columns row">
         <div className="user-card__avatar small-3 row align-middle align-center columns">
            <Avatar src={props.user.avatar_img} size={90} />
         </div>
         <div className="user-card__content small-8 columns">
            <h4>
               @{props.user.display_name}
            </h4>
            <p>
               {props.user.username}
            </p>
         </div>
         <div className="user-card__buttons small-12 align-middle align-center row">
           
                <FlatButton
               style={{ textAlign: "center" }}
               primary={true}
               disabled={label !== 'Add Friend'}
               label={label}
               labelStyle={{ fontWeight: "300" }}
               icon={<FontIcon className="icon-Following_icon" style={{fontSize: '28px', lineHeight: '24px'}}/>}
               onTouchTap={() => props.handleFriendRequest(props.user._id)}
            />

            <FlatButton
               secondary={true}
               label={`See Posts(${props.user.messages.length})`}
               labelStyle={{ fontWeight: "300" }}
               icon={<MessageIcon />}
            />
         </div>
      </Paper>
   );
};

export default UserCard;
