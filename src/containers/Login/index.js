import React, { Component } from 'react'
import TextInput from '../../components/TextInput';
import FlatButton from 'material-ui/FlatButton';




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
      evt.preventDefault();
      console.log(this.state);
   }

   render(){
      const { username, password } = this.state;
      return(
         <div className="login container">
            <h1 className="flipr">Flipr</h1>
            <form onSubmit={this.handleLogin} style={{textAlign: 'center', backgroundColor: "fff", borderRadius: "4px"}}>
               <TextInput
                  key="username-login"
                  label="Username"
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
               <FlatButton
                  label="Login"
                  type="submit"
                  backgroundColor = "#4DD0E1"
                  labelStyle={{
                     borderRadius: "5px",
                     color: "#FFF"
                  }}
               />
            </form>
         </div>
      )
   }
}
