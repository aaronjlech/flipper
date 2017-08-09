import React, { Component } from 'react';
import NavBar from '../../components/NavBar';
import Post from '../../components/Post';
import './HomeView.css';




export default class HomeView extends Component {



   render(){
      return (
         <div className="home">
            <NavBar/>
            <div className="post_container">
               <Post username='bill' likes={0n}/>
            </div>
         </div>
      )
   }
}
