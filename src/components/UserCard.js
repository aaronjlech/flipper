import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import MessageIcon from 'material-ui/svg-icons/communication/message'


const UserCard = (props) => {

   return (
      <Paper className="user-card small-12 columns row">
         <div className="user-card__avatar small-3 row align-middle align-center columns">
            <Avatar src={props.user.avatar_img} size={90}/>
         </div>
         <div className="user-card__content small-8 columns">
            <h4>@{props.user.display_name}</h4>
            <p>{props.user.username}</p>
         </div>
         <div className="user-card__buttons small-12 align-middle align-center row">
            <FlatButton
               style={{textAlign: 'center'}}
               primary={true}
               label='Add friend'
               labelStyle={{fontWeight: '300'}}
               icon={<ActionAndroid/>}
            />
            <FlatButton
               secondary={true}
               label={`See Posts(${props.user.messages.length})`}
               labelStyle={{fontWeight: '300'}}
               icon={<MessageIcon/>}
            />
         </div>

      </Paper>
   )
}

export default UserCard;
