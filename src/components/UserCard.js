import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
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
      </Paper>
   )
}

export default UserCard;
