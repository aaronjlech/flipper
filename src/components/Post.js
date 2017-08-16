import React from 'react';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Checkbox from 'material-ui/Checkbox';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';

const Post = (props) => {
   return (
      <Paper className="post columns small-12 large-6 row">
         <div className="post__image columns small-3 row align-middle align-center">
            <Avatar src="https://randomuser.me/api/portraits/lego/4.jpg" size={90}/>
         </div>
         <div className="post_text columns">
            <h4 className='post__username'>@{props.username}</h4>
            <p className="post__time thin__italics">July 10, 2017</p>
            <p className="post__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div className="post__social row align-middle align-center">
               <div className="post__likes columns small-6">
                  <Checkbox
                    className={`thin__italics`}
                    checkedIcon={<ActionFavorite />}
                    uncheckedIcon={<ActionFavoriteBorder />}
                    iconStyle={{margin: '0'}}
                    label={`${props.likes} Likes`}
                  />
               </div>
               <div className="post__comment columns">
                  <FlatButton
                     style={{zIndex: '0'}}
                     primary={true}
                     label='0 comments'
                     labelStyle={{fontWeight: '400', fontSize: '13px'}}
                     className="thin__italics"

                  />
               </div>
            </div>

         </div>
      </Paper>
   )
}


export default Post;
