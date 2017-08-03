import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { indigoA700, cyanA100 } from 'material-ui/styles/colors';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
import * as services from './services'
import injectTapEventPlugin from 'react-tap-event-plugin';
import Login from './containers/Login';

const muiTheme = getMuiTheme({
  palette: {
   primary1Color: indigoA700,
   secondary1Color: cyanA100
  }
});
services.users.getAllUsers()
injectTapEventPlugin();

class App extends Component {

    render(){
        return(
           <MuiThemeProvider muiTheme={muiTheme}>
              <Login/>
           </MuiThemeProvider>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector("#app-container"));
