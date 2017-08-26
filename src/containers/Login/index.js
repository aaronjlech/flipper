import React, { Component } from 'react';
import TextInput from '../../components/TextInput';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper'
import { users } from '../../services';
import SignUpModal from '../SignUpModal';
import Logo from '../../components/Logo';
import './Login.css';

const loginBoxStyles = {
   padding: '20px 10px',
   backgroundColor: 'rgba(255, 255, 255, .9)',
   width: '80%',
   minWidth: '300px',
   margin: '0 auto'
}


export default class Login extends Component {
   constructor(props){
      super(props)
      this.state = {
         username: '',
         password: ''
      }
   }
   handleChange = (evt) => {
      this.setState({[evt.target.name] : evt.target.value})
   }

   handleLogin = (evt) => {
      const { loginUser, history } = this.props;
      const {username, password } = this.state;
      evt.preventDefault();
      loginUser({username, password})
   }

   render(){
      const { username, password } = this.state;
      return(
         <div className="login container">
            <div className="logo_container">
               <img src="./images/icons/Flippr_logo.svg" alt=""/>
            </div>
            <Paper style={loginBoxStyles} rounded={false}>
               <form className="pure-u-12" onSubmit={this.handleLogin} style={{textAlign: 'center', borderRadius: "4px"}}>

                     <TextInput
                        key="username-login"
                        label="Email"
                        type="text"
                        name="username"
                        value={username}
                        handleChange={this.handleChange}
                     />

                     <TextInput
                        key="password-login"
                        label="Password"
                        type="password"
                        name="password"
                        value={password}
                        handleChange={this.handleChange}
                     />
                     <RaisedButton
                        label="Login"
                        type="submit"
                        primary={true}
                        style={{
                           marginTop: '20px',
                           borderRadius: "40px",
                           color: "#FFF"
                        }}
                     />
               </form>
            </Paper>
            <SignUpModal {...this.props}/>
         </div>
      )
   }
}
