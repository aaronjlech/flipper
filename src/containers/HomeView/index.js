import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import MobileNav from "../../components/MobileNav";
import Post from "../../components/Post";
import UsersList from "../UsersList";
import SwipeableViews from "react-swipeable-views";

import MessagesList from "../MessagesList";
import "./HomeView.css";

export default class HomeView extends Component {
   constructor(props) {
      super(props);
      this.state = {
         open: false,
         value: 1
      };
   }
   componentDidMount = () => {
      this.props.fetchUserIfNeeded();
      this.props.fetchAllUsers();
      this.props.fetchMessagesIfNeeded();
   };
   handleOpen = () => {
      this.setState({ open: true });
   };

   handleClose = () => {
      this.setState({ open: false });
   };
   handleSlide = value => {
      console.log(window.scrollY);
      document.body.scrollTop = 0;
      this.setState({ value });
   };
   render() {
      return (
         <div className="home">
            <NavBar />

            <SwipeableViews
               index={this.state.value}
               onChangeIndex={this.handleSlide}
            >
               <UsersList {...this.props} />
               <MessagesList {...this.props} />
            </SwipeableViews>
            <MobileNav
               {...this.props}
               {...this.state}
               handleSlide={this.handleSlide}
               handleOpen={this.handleOpen}
               handleClose={this.handleClose}
            />
         </div>
      );
   }
}
