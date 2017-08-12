import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';

const styles = {
   position: 'fixed',
   bottom: '0',
   width: '100%',
   backgroundColor: 'black'
}


const TabsExampleIcon = () => (
  <Tabs style={styles}>
    <Tab icon={<FontIcon className="material-icons" >face</FontIcon>} />
    <Tab icon={<FontIcon className="material-icons">home</FontIcon>} />
    <Tab icon={<FontIcon className="material-icons">add</FontIcon>} />

  </Tabs>
);

export default TabsExampleIcon;
