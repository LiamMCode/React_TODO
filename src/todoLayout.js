import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './bootstrap.min.css';
import './App.css';
import { Link } from 'react-router-dom';

function Hero() {
    return (<div className='row'>
      <div className='jumbotron col-10 offset-1'>
        <h1> TODO App</h1>
      </div>
    </div>)
  }

  function todoLayout({turnData, highlight, onAnswerSelected, onContinue}) {
    return (
      <div className='container-fluid'>
        <Hero/>
        <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected}/>
        <p><Link to='/add'>Add a TODO</Link></p>
      </div>
    );
  }

  export default todoLayout;
