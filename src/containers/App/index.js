import React, { Component } from 'react';
import store from '../../store';
import actions from '../../store/actions';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


//COMPONENTS
import Login from '../Login';
import HomeView from '../HomeView';
import Loading from '../../components/Loading';
import './App.css';

class App extends Component {

   render(){
      const { User, AllUsers, Messages } = this.props
      console.log(this.props);
      if(User.isFetching || Messages.isFetching || AllUsers.isFetching) {
         return (
            <Loading/>
         )
      } else {
         return(
               <HashRouter>
                  <Switch>
                     {/* ALL CONTAINERS GET STORE/STATE AS PROPS */}
                     <Route exact path="/" render={() => <Login {...this.props}/>}/>
                     <Route exact path ='/home' render={() => <HomeView {...this.props} />}/>
                  </Switch>
               </HashRouter>
         )
      }

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
