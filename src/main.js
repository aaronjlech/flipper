import React from 'react';
import ReactDOM from 'react-dom';
import Form from './counter.js';


const App = React.createClass({


    render(){
        return(
           <div>
             <Form/>
           </div>
        )
    }

})


ReactDOM.render(<App/>, document.querySelector("#app-container"));
