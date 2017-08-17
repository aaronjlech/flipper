import React from "react";
import ActionFavorite from "material-ui/svg-icons/action/favorite";
import ActionFavoriteBorder from "material-ui/svg-icons/action/favorite-border";
import Checkbox from "material-ui/Checkbox";
import Paper from "material-ui/Paper";
import Avatar from "material-ui/Avatar";
import FlatButton from "material-ui/FlatButton";
import moment from 'moment';
const Post = props => {
   const { message, currentUser } = props
   const { _creator } = message
   return (
      <Paper className="post columns small-12 large-6 row">
         <div className="post__image columns small-3 row align-middle align-center">
            <Avatar
               src="https://randomuser.me/api/portraits/lego/4.jpg"
               size={90}
            />
         </div>
         <div className="post_text columns">
            <h4 className="post__username">
               @{_creator.display_name}
            </h4>
            <p className="post__time thin__italics">{moment(message.createdAt).from(Date.now())}</p>
            <p className="post__text">
               {message.body}
            </p>
            <div className="post__social row align-middle align-center">
               <div className="post__likes columns small-6">
                  <Checkbox
                     checked={message.likes.includes(currentUser)}
                     disabled={currentUser === _creator._id}
                     className={`thin__italics`}
                     checkedIcon={<ActionFavorite />}
                     uncheckedIcon={<ActionFavoriteBorder />}
                     iconStyle={{ margin: "0" }}
                     label={`${message.likes.length} Likes`}
                     onCheck={(evt) => props._handleLike(evt, message._id)}
                  />
               </div>
               <div className="post__comment columns">
                  <FlatButton
                     style={{ zIndex: "0" }}
                     primary={true}
                     label="0 comments"
                     labelStyle={{ fontWeight: "400", fontSize: "13px" }}
                     className="thin__italics"
                  />
               </div>
            </div>
         </div>
      </Paper>
   );
};

export default Post;
