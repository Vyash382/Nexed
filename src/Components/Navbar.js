import React, { Component } from "react";
import PropTypes from "prop-types";

const Navbar =(props)=> {
  
    
    return (
      <nav style={{position: 'sticky',top:'0', zIndex: '1'}} className="navbar navbar-expand-lg navbar-light bg-primary ">
        <a style={{color:'white'}} className=" mx-1 navbar-brand" href="0">
          NEXED
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
            <button className="btn btn-primary mx-1" onClick={() => props.updSt('general')}>
                Home
              </button>
            </li>
            <li className="nav-item">
            <button className="btn btn-primary mx-1" onClick={() => props.updSt('business')}>
                Business
              </button>
            </li>
            <li className="nav-item">
            <button className="btn btn-primary mx-1" onClick={() => props.updSt('entertainment')}>
                Entertainment
              </button>
            </li>
            <li className="nav-item dropdown">
            <button className="btn btn-primary mx-1" onClick={() => props.updSt('politics')}>
                Politics
              </button>
            </li>
            <li className="nav-item dropdown">
            <button className="btn btn-primary mx-1" onClick={() => props.updSt('health')}>
                Health
              </button>
            </li>
            <li className="nav-item dropdown">
            <button className="btn btn-primary mx-1" onClick={() => props.updSt('science')}>
                Science
              </button>
            </li>
            <li className="nav-item dropdown">
            <button className="btn btn-primary mx-1" onClick={() => props.updSt('sports')}>
                Sports
              </button>
            </li>
            <li className="nav-item dropdown">
            <button className="btn btn-primary mx-1" onClick={() => props.updSt('technology')}>
                Technology
              </button>
            </li>
          </ul>
        </div>
      </nav>
    );
  
}

export default Navbar;
