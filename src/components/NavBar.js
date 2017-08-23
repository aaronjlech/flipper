import React from "react";
import AppBar from "material-ui/AppBar";
import RequestsMenu from './RequestsMenu'
/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const NavBar = (props) => {
   const { user } = props.User
   console.log(user);
   return (
      <AppBar
      style={{ position: "fixed", backgroundColor: "#000", color: '#FFF' }}
      title="Flippr"
      className="nav-bar"
      titleStyle={{ textAlign: "center", fontFamily: "Grand Hotel, serif" }}
      iconElementRight={<RequestsMenu user={user}/>}
      iconStyleRight={{padding: 0}}
   />)}

export default NavBar;
