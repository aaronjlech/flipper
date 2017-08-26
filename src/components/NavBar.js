import React from "react";
import AppBar from "material-ui/AppBar";
import NavMenu from './NavMenu';
import RequestsMenu from './RequestsMenu'
/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const NavBar = (props) => {
   const { user } = props.User

   return (
      <div className="title-bar nav-bar">
 <div className="title-bar-left">
    <NavMenu/>
 </div>
 <div className="title-bar-center">
     <img src="./images/icons/Flippr_logo.svg" alt=""/>
 </div>
 <div className="title-bar-right">
    <RequestsMenu user={user} handleAccept={props.handleAccept} handleDecline={props.handleDecline}/>
 </div>
</div>)
}

export default NavBar;
