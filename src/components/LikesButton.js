import React, { Component } from "react";
import Snackbar from "material-ui/Snackbar";
import ActionFavorite from "material-ui/svg-icons/action/favorite";
import ActionFavoriteBorder from "material-ui/svg-icons/action/favorite-border";
import Checkbox from "material-ui/Checkbox";

export default class LikesButton extends Component {
   constructor(props) {
      super(props);
      this.state = {
         open: false
      };
   }

   handleTouchTap = () => {
      this.setState({
         open: true
      });
   };

   handleRequestClose = () => {
      this.setState({
         open: false
      });
   };

   render() {
      return (
         <div>
            <Checkbox
               checkedIcon={<ActionFavorite />}
               uncheckedIcon={<ActionFavoriteBorder />}
               label={"0 likes"}
               onTouchTap={this.handleTouchTap}
            />
            <Snackbar
               open={this.state.open}
               message="Liked this Message"
               autoHideDuration={4000}
               onRequestClose={this.handleRequestClose}
            />
         </div>
      );
   }
}
