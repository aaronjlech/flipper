import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import Form from './counter.js';
import injectTapEventPlugin from 'react-tap-event-plugin';


injectTapEventPlugin();

class App extends Component {

    render(){
        return(

           <MuiThemeProvider>
             <RaisedButton label="default"/>
           </MuiThemeProvider>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector("#app-container"));
