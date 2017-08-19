import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
const Comment = (props) => {
   return (
      <Paper className="comment columns">
         <div className="avatar__comment">
            <Avatar src={props.avatar_img} size={50}/>
            
         </div>
      </Paper>
   )
}
