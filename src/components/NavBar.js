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
      <AppBar
      style={{ position: "fixed", backgroundColor: "#000", color: '#FFF' }}
      title="Flippr"
      className="nav-bar"
      showMenuIconButton={false}
      titleStyle={{ textAlign: "center", fontFamily: "Grand Hotel, serif" }}
      iconElementLeft={<IconButton><NavMenu/></IconButton>}
      iconElementRight={<RequestsMenu user={user} handleAccept={props.handleAccept} handleDecline={props.handleDecline}/>}
      iconStyleRight={{padding: 0}}
   />)}

export default NavBar;
