import React, { Component } from 'react';
import store from '../../store';
import actions from '../../store/actions';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Login from '../Login';



class App extends Component {
   constructor(props){
      super(props)
   }

   render(){
      console.log(this.props);
      return(
         <div>
            <h1>Hey from the router</h1>
            <HashRouter>
               <Switch>
                  {/* ALL CONTAINERS GET STORE/STATE AS PROPS */}
                  <Route exact path="/" render={() => <Login {...this.props}/>}/>
                  <Route/>
               </Switch>
            </HashRouter>
         </div>
      )
   }
}
function mapStateToProps(state){
   return {
      ...state
   }
}

function mapDispatchToProps(dispatch){
   return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
