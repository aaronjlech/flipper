import Card from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import React, { Component } from 'react';



export default class PostMessage extends Component {
   constructor(props){
      super(props)
   }

   render(){
      return (
         <Card className="message_container">
            <div className="message__user-info">
               <div className="user-info__avatar">
                  <Avatar src="https://randomuser.me/api/portraits/lego/4.jpg" size={50}/>
               </div>
               <div className="user-info__content">
                  <h4>@Bill</h4>
                  <p></p>
               </div>
            </div>
            <div className="message__text-area">
               <textarea name="message" id="" cols="30" rows="10" placeholder="what's on your mind?"></textarea>
            </div>
         </Card>
      )
   }
}
