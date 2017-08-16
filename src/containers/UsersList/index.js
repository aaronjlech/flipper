import React from 'react';
import UserCard from '../../components/UserCard';



const UsersList = (props) => {


      return (
         <div className="users_container row">
            {props.AllUsers.allUsers.map(user => {
               return <UserCard user={user} key={user._id}/>
            })}
         </div>
      )
}


export default UsersList
