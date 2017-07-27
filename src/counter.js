import React, { Component } from 'react';

export default class Form extends Component {
   constructor(props){
      super(props)
   }

   _handleSubmit = (event) => {
      event.preventDefault();
      // you can target them with this.refs
      console.log(this.refs.username);
      console.log(this.refs.password);
      const { password, username } = this.refs;
      let loginData = {
         username: username.value,
         password: password.value

      }
      console.log(loginData);
   }
   render(){
      return(
         <form onSubmit={this._handleSubmit}>
            {/* you can add ref onto elements */}
            <input type="text" name='username' ref='username'/>
            <input type="password" name='password' ref='password'/>
            <button type='submit'>login!</button>
         </form>
      )
   }
}
