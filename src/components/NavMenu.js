import React from 'react';
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';


const NavMenu = (props) => {
   return (
      <IconMenu
 iconButtonElement={<IconButton><NavigationClose /></IconButton>}
 anchorOrigin={{horizontal: 'left', vertical: 'top'}}
 targetOrigin={{horizontal: 'left', vertical: 'top'}}
>
 <MenuItem primaryText="Refresh" />
 <MenuItem primaryText="Send feedback" />
 <MenuItem primaryText="Settings" />
 <MenuItem primaryText="Help" />
 <MenuItem primaryText="Sign out" />
</IconMenu>
   )
}

export default NavMenu
