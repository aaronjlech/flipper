import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import injectTapEventPlugin from 'react-tap-event-plugin';
import Login from './containers/Login';

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
