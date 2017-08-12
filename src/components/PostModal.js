import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const customContentStyle = {
  width: '40%',
  maxWidth: 'none',
};

/**
 * The dialog width has been set to occupy the full width of browser through the `contentStyle` property.
 */
export default class PostModal extends React.Component {




  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.props.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={this.props.handleClose}
      />,
    ];

    return (
      <div>
        <Dialog
          title="Dialog With Custom Width"
          actions={actions}
          modal={true}
          contentStyle={customContentStyle}
          open={this.props.showModal}
        >
          This dialog spans the entire width of the screen.
        </Dialog>
      </div>
    );
  }
}
