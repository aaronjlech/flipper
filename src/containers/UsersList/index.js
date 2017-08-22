import React, { Component } from "react";
import UserCard from "../../components/UserCard";

export default class UserList extends Component {
   render() {
      const currentUser = this.props.User.user;
      return (
         <div className="users_container row">
            {this.props.AllUsers.allUsers.map(user => {
               return (
                  <UserCard
                     user={user}
                     key={user._id}
                     handleFriendRequest={this.props.handleFriendRequest}
                     currentUser={currentUser}
                  />
               );
            })}
         </div>
      );
   }
}
