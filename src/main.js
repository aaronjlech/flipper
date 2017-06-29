import React from 'react';
import ReactDOM from 'react-dom';



const App = React.createClass({
    
    
    render(){
        return(
          <h1>Hey there</h1>
        )
    }
    
})


ReactDOM.render(<App/>, document.querySelector("#app-container"));
