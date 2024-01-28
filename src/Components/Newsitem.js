import React, { Component } from 'react';

const Newsitem= (props)=> {
  
    
    return (
      <div className="card my-3" >
        <img src={props.imageURl?props.imageURl:'https://www.livemint.com/lm-img/img/2024/01/02/1600x900/small_cap_mid_cap_funds_1698998455173_1704193974385.jpg'} className="card-img-top" style={{height: '193px'}} alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            {props.descs}
          </p>
          <a href={props.url} className="btn btn-sm btn-primary">
            Read More
          </a>
          <p style={{
            color: 'grey',
            marginTop: '17px',
            opacity:'54%'
          }}>Published  {props.author && ' by '+props.author} at {props.publishedAt}</p>
          <div style={{
            textAlign: 'center',
            position: 'absolute',
            right: '-19px',
            top: '0',
            color: 'white',
            backgroundColor: '#a51111',
            borderRadius: '20px',
            width: '103px'
          }}>{props.tr}</div>
        </div>
        
      </div>
    );
  
}

export default Newsitem;
