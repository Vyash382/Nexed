import React, { Component } from "react";

const Spinner= (props)=> {
  
    
    return !props.load && (
      <div className="container" style={{display: 'flex', justifyContent: 'center'}}>
        <div  className="spinner-border container" role="status">
        <span  className="sr-only"></span>
      </div>
      </div>
      
    );
  
}

export default Spinner;
