import React from 'react';
import Avatar from 'material-ui/Avatar';



const UserInfo = (props) => {
   return (
      <div className="user-info">
         <div className="user-info__avatar">
            <Avatar src={props.user.img} size={50} />
         </div>
         <div className="user-info__content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis inventore voluptatum corporis quam culpa velit, qui in fugiat excepturi ullam est odit, nemo iusto, ipsum ipsam earum maiores! Praesentium, eveniet?</p>
         </div>
      </div>
   )
}
