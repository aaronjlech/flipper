import React, { Component } from 'react';
import NavBar from '../../components/NavBar';
import MobileNav from '../../components/MobileNav';
import Post from '../../components/Post';
import './HomeView.css';




export default class HomeView extends Component {



   render(){
      return (
         <div className="home">
            <NavBar/>

            <div className="post_container">
               <Post username='Bill' likes={0} key='0'/>
               <Post username='Bill' likes={0} key='50'/>
               <Post username='Bill' likes={0} key='540'/>
               <Post username='Bill' likes={0} key='5ff0'/>
               <Post username='Bill' likes={0} key='5asdfas0'/>
               <Post username='Bill' likes={0} key='5aaa0'/>

            </div>
            <MobileNav/>

         </div>
      )
   }
}
