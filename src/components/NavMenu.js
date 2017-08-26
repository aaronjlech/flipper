import React from 'react';
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton';
import Navigation from 'material-ui/svg-icons/navigation/menu';
import MenuItem from 'material-ui/MenuItem';

const NavMenu = (props) => {
   return (
      <IconMenu
 iconButtonElement={<IconButton><Navigation color="#FFF" /></IconButton>}
 anchorOrigin={{horizontal: 'left', vertical: 'top'}}
 targetOrigin={{horizontal: 'left', vertical: 'top'}}
>
 <MenuItem primaryText="Send feedback" />
 <MenuItem primaryText="Sign out" onClick={()=> console.log('hey')}/>
</IconMenu>
   )
}

export default NavMenu
