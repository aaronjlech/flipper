import React, { Component } from "react";
import Post from "../../components/Post";

export default class MessagesList extends Component {
   _handleLike = (evt, messageId) => {
      this.props.handleLike(messageId)
   };

   render() {
      const { _id } = this.props.User.user;
      console.log(_id)
      return (
         <div className="messages-list row">
            {this.props.Messages.messages.map(message => {
               return (
                  <Post
                     key={message._id}
                     message={message}
                     currentUser={_id}
                     _handleLike={this._handleLike}
                  />
               );
            })}
         </div>
      );
   }
}
