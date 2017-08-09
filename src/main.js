import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { indigoA700, cyanA100 } from 'material-ui/styles/colors';
import * as services from './services';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import store from './store';
import Login from './containers/Login';
import App from './containers/App';

const muiTheme = getMuiTheme({
  palette: {
   primary1Color: indigoA700,
   secondary1Color: cyanA100
  }
});
injectTapEventPlugin();
services.users.getAllUsers().then(res => console.log(res))
class Main extends Component {

    render(){
        return(
           <MuiThemeProvider muiTheme={muiTheme}>
             <Provider store={store}>
                <App/>

             </Provider>
           </MuiThemeProvider>
        )
    }
}

ReactDOM.render(<Main/>, document.querySelector("#app-container"));
