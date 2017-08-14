import React from 'react';
import AppBar from 'material-ui/AppBar';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const NavBar = () => (
  <AppBar
     style={{position: 'fixed', backgroundColor: '#000'}}
    title="Flippr"
    className='nav-bar'
    titleStyle={{textAlign: 'center', fontFamily: "Grand Hotel, serif"}}
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
);

export default NavBar;
