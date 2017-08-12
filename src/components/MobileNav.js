import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';

const TabsExampleIcon = () => (
  <Tabs>
    <Tab icon={<FontIcon className="muidocs-icon-action-home" />} />
    <Tab icon={<ActionFlightTakeoff />} />
    <Tab icon={<FontIcon className="fa fa-plus"/>} />
  </Tabs>
);

export default TabsExampleIcon;
