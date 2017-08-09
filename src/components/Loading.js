import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';



export default function(props) {
   return (
      <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
         <CircularProgress size={100} thickness={8} />
      </div>
   )
}
