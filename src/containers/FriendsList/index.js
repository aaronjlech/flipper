import React, { Component } from 'react';
import UserCard from '../../components/UserCard';
import Loading from '../../components/Loading';
import NavBar from '../../components/NavBar';
import './FriendsList.css';

export default class FriendsList extends Component {

   componentDidMount = () => {
      this.props.fetchUserIfNeeded();
      this.props.fetchAllUsersIfNeeded();
      this.props.fetchMessagesIfNeeded();
   };
    render(){
        const { User } = this.props
        if (!User.user.username) {
         console.log('waht');
         return <Loading />;
        } else {
            const { friends } = User.user
            return (
                <div className="friends-list">
                    <NavBar {...this.props}/>
                       <div className="friends-container grid-y">
                    {friends.map(friend => {
                        return <UserCard user={friend} currentUser={User.user} key={friend._id} />
                    })}
                </div>         
                </div>

            )
         }

    }
}