import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import PostModal from './PostModal';
const styles = {
   position: 'fixed',
   bottom: '0',
   width: '100%',
   backgroundColor: 'black'
}


export default class TabsExampleIcon extends Component{
   constructor(props){
      super(props)
      this.state = {
         open: false
      }
   }

   handleOpen = () => {
     this.setState({open: true});
   };

   handleClose = () => {
     this.setState({open: false});
   };

   render(){
      return (
         <div>
            <PostModal showModal={this.state.open} handleClose={this.handleClose} handleOpen={this.handleOpen}/>

            <Tabs style={styles}>
               <Tab icon={<FontIcon className="material-icons" >face</FontIcon>} />
               <Tab icon={<FontIcon className="material-icons">home</FontIcon>} />
               <Tab onActive={this.handleOpen} icon={<FontIcon className="material-icons">add</FontIcon>} />

            </Tabs>
         </div>

       )

   }
}
