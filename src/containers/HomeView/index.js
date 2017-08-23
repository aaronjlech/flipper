import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import MobileNav from "../../components/MobileNav";
import Post from "../../components/Post";
import UsersList from "../UsersList";
import SwipeableViews from "react-swipeable-views";
import Loading from "../../components/Loading";
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
      this.props.fetchAllUsersIfNeeded();
      this.props.fetchMessagesIfNeeded();
   };
   handleOpen = () => {
      this.setState({ open: true });
   };

   handleClose = () => {
      this.setState({ open: false, value: 1 });
   };
   handleSlide = value => {
      document.body.scrollTop = 0;
      this.setState({ value });
   };
   render() {
      const { value } = this.state;
      const { User, AllUsers, Messages } = this.props;
      if (!User.user.username || Messages.isFetching || AllUsers.isFetching) {
         console.log('waht');
         return <Loading />;
      } else {
         return (
            <div className="home">
               <NavBar {...this.props} />

               <SwipeableViews
                  index={this.state.value}
                  onChangeIndex={this.handleSlide}
               >
                  <UsersList {...this.props} value={value} />
                  <MessagesList {...this.props} value={value} />
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
}
