import React from 'react';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Checkbox from 'material-ui/Checkbox';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';

const Post = (props) => {
   return (
      <Paper className="post">
         <div className="post__image">
            <Avatar src="https://randomuser.me/api/portraits/lego/4.jpg" size={100}/>
         </div>
         <div className="post_text">
            <h4 className='post__username'>@{props.username}</h4>
            <p className="post__time">July 10, 2017</p>
            <p className="post__date">{props.createdAt}</p>
            <p className="post__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div className="post__likes">
               <Checkbox
                 checkedIcon={<ActionFavorite />}
                 uncheckedIcon={<ActionFavoriteBorder />}
                 label={`${props.likes} Likes`}
/>
            </div>

         </div>
      </Paper>
   )
}


export default Post;
