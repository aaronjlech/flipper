import React, { Component } from 'react';
import Post from '../../components/Post';


export default class MessagesList extends Component {




   render(){
      return (
         <div className="messages-list row">
            {this.props.Messages.messages.map((message) => {
               return <Post key={message._id} message={message} />
            })}
         </div>
      )
   }
}
