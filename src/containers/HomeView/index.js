import React, { Component } from 'react';
import NavBar from '../../components/NavBar';
import MobileNav from '../../components/MobileNav';
import Post from '../../components/Post';
import UsersList from '../UsersList';
import './HomeView.css';




export default class HomeView extends Component {

   componentDidMount = () => {
      this.props.fetchUserIfNeeded()
      this.props.fetchAllUsers()
      this.props.fetchMessagesIfNeeded()
   }

   render(){
      return (
         <div className="home">
            <NavBar/>

            <UsersList {...this.props}/>

            <MobileNav {...this.props}/>

         </div>
      )
   }
}
