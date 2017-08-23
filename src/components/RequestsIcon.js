import React from 'react';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

const RequestsIcon = (props) => (
    <Badge
      badgeContent={props.user.friend_requests.length}
      secondary={true}
      style={{padding: 0, color: '#FFF'}}
      badgeStyle={{top: 0, right: 0, padding: 0}}
    >
      <IconButton
         onClick={props.onClick}
      >
        <NotificationsIcon color='#FFF'/>
      </IconButton>
    </Badge>
);


export default RequestsIcon
