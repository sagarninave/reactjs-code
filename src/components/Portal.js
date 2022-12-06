import React from 'react';
import ReactDOM from 'react-dom';

const Portal = () => {
  return ( 
    ReactDOM.createPortal(
      <div style={{position:"absolute", left:"60%", top:"20%"}}>
        <strong className="heading"> Portal </strong> <br/>
      </div>, 
      document.getElementById("root-new") 
    )
   );
}
 
export default Portal;