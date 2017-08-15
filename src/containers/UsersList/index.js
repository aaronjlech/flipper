import React, { Component } from 'react';
import UserCard from '../../components/UserCard';



export default class UsersList extends Component {


   render(){
      return (
         <div className="users_container">
            <UserCard/>
         </div>
      )
   }
}
