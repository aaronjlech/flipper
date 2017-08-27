import React, { Component } from "react";
import { Tabs, Tab } from "material-ui/Tabs";
import FontIcon from "material-ui/FontIcon";
import AddIcon from "material-ui/svg-icons/content/add-circle";
import PostModal from "./PostModal";
const styles = {
   position: "fixed",
   bottom: "0",
   width: "100%",
   zIndex: "1000"
};
const MobileNav = props => {
   return (
      <div className="mobile-nav">
         <PostModal {...props} />
         <Tabs value={props.value} onChange={props.handleSlide} style={styles}>
            <Tab
               value={0}
               icon={<FontIcon className="icon-MyAccount_icon"></FontIcon>}
            />
            <Tab
               value={1}
               icon={<FontIcon className="icon-FlippFeed_icon"></FontIcon>}
            />
            <Tab value={2} onActive={props.handleOpen} icon={<AddIcon />} />
         </Tabs>
      </div>
   );
};
export default MobileNav;
