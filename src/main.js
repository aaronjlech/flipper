import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { indigoA700, cyan300 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import store from './store';
import App from './containers/App';

const muiTheme = getMuiTheme({
   palette: {
      primary1Color: indigoA700,
      accent1Color: cyan300,

   }


});
injectTapEventPlugin();

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
