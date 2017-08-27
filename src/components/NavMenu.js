import React from 'react';
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton';
import Navigation from 'material-ui/svg-icons/navigation/menu';
import MenuItem from 'material-ui/MenuItem';
import history from '../history';
const NavMenu = (props) => {

   return (
      <IconMenu
 iconButtonElement={<IconButton><Navigation color="#FFF" /></IconButton>}
 anchorOrigin={{horizontal: 'left', vertical: 'top'}}
 targetOrigin={{horizontal: 'left', vertical: 'top'}}
>
 <MenuItem primaryText="Home" onClick={()=> history.push('/home')}/>
 <MenuItem primaryText="Friends" onClick={()=> history.push('/friends')}/>
 <MenuItem primaryText="Sign out" onClick={()=> props.logoutUser()}/>
</IconMenu>
   )
}

export default NavMenu
