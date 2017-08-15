import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import MessageIcon from 'material-ui/svg-icons/communication/message'


const UserCard = (props) => {

   return (
      <Paper className="user-card">
         <div className="user-card__avatar">
            <Avatar src="https://randomuser.me/api/portraits/lego/4.jpg" size={90}/>
         </div>
         <div className="user-card__content">
            <h4>@Bill</h4>
            <h4>email@mail.com</h4>

         </div>
         <div className="user-card__buttons">
            <FlatButton
               style={{textAlign: 'center'}}
               primary={true}
               label='Add friend'
               labelStyle={{fontWeight: '300'}}
               icon={<ActionAndroid/>}
            />
            <FlatButton
               secondary={true}
               label='See Posts(10)'
               labelStyle={{fontWeight: '300'}}
               icon={<MessageIcon/>}
            />
         </div>

      </Paper>
   )
}

export default UserCard;
