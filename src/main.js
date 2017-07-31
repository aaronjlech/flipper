import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import * as services from './services'
import injectTapEventPlugin from 'react-tap-event-plugin';
import Login from './containers/Login';

services.users.getAllUsers()
injectTapEventPlugin();

class App extends Component {

    render(){
        return(

           <MuiThemeProvider>
             <Login/>
           </MuiThemeProvider>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector("#app-container"));
