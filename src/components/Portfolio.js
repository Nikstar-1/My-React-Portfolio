import React from 'react';
import '../App.css';
import TravelTracker from './images/TravelTracker.png';
import Burger from './images/Burger.png';
import NoteTaker from './images/NoteTaker.png';
import CurrencyConverter from './images/CurrencyConverter.png';
import Weather from './images/Weather.png';
import Horiseon from './images/Horiseon.png';
import Password from './images/Password.png';
import WorkScheduler from './images/WorkScheduler.png';
import CodeQuiz from './images/CodeQuiz.png';

function Portfolio () {
  return (
    <div id="intro" className="view">
    <div className="container">
      <div className="rows">
        <div className="col-xs-6 col-sm-6 col-lg-3">
          <h2 className="ml3">Portfolio</h2> 
          
        </div>
      </div>   
      <hr />
      <div className="rows" id="row-group">
        <p style={{textAlign: 'center'}}><a href="https://travel-tracker-2021.herokuapp.com/" target="_blank" rel="noreferrer">Click here to view: Travel Tracker</a></p>
        <div className="col-sm-6 col-xs-6 col-md-9 col-lg-12">
          <img src={TravelTracker} style={{width:'300px', fontSize: '10px'}} id="bio-image" alt="Travel Tracker" />
        </div>          
      </div>
      <div className="rows" id="row-group">
        <p style={{textAlign: 'center'}}><a href="https://still-atoll-89134.herokuapp.com/burgers" id="websiteLink" target="_blank" rel="noreferrer">Click here to view: Burger App</a></p>
        <div className="col-sm-6 col-xs-6 col-md-9 col-lg-12">
          <img src={Burger} style={{width:'300px', fontSize: '10px'}} id="bio-image" alt="Burger App" />
        </div>          
      </div>
      <div className="rows" id="row-group">
        <p style={{textAlign: 'center'}}> <a href="https://quiet-atoll-71792.herokuapp.com/" id="websiteLink" target="_blank" rel="noreferrer">Click here to view: Note Taker App</a></p>
        <div className="col-sm-6 col-xs-6 col-md-9 col-lg-12">
          <img src={NoteTaker} style={{width:'300px', fontSize: '10px'}} id="bio-image" alt="Note taker" />
        </div>          
      </div>
      <div className="rows" id="row-group">
        <p style={{textAlign: 'center'}}><a href="https://nikstar-1.github.io/exchange-away/" id="websiteLink" target="_blank" rel="noreferrer">Click here to View: Project 1 Currency Converter</a></p>
        <div className="col-sm-6 col-xs-6 col-md-9 col-lg-12">
          <img src={CurrencyConverter} style={{width:'300px', fontSize: '10px'}} id="bio-image" alt="project1" /> 
        </div> 
        <div className="rows" id="row-group">
          <p style={{textAlign: 'center'}}><a href="https://nikstar-1.github.io/weather-dashboard/" id="websiteLink" target="_blank" rel="noreferrer">Click here to View: Weather Dashboard</a></p>
          <div className="col-sm-6 col-xs-6 col-md-9 col-lg-12">
            <img src={Weather} style={{width:'300px', fontSize: '10px'}} id="bio-image" alt="Weather Dashboard" />
          </div>          
        </div>
        <div className="rows" id="row-group">
          <p style={{textAlign: 'center'}}><a href="https://nikstar-1.github.io/01-Code-Refactor/" id="websiteLink" target="_blank" rel="noreferrer">Click here to view: Horiseon</a></p>
          <div className="col-sm-6 col-xs-6 col-md-9 col-lg-12">
            <img src={Horiseon} style={{width:'300px', fontSize: '10px'}} id="bio-image" alt="Horiseon" />
          </div>          
        </div>
        <div className="rows" id="row-group">
          <p style={{textAlign: 'center'}}><a href="https://nikstar-1.github.io/new-password-generator/" id="websiteLink" target="_blank" rel="noreferrer">Click here to view: Password Generator</a></p>
          <div className="col-sm-6 col-xs-6 col-md-9 col-lg-12">
            <img src={Password} style={{width:'300px', fontSize: '10px'}} id="bio-image" alt="Password Generator" />
          </div>
        </div>
        <div className="rows" id="row-group">
          <p style={{textAlign: 'center'}}> <a href="https://nikstar-1.github.io/work-day-scheduler-new/" id="websiteLink" target="_blank" rel="noreferrer">Click here to view: Workday Scheduler</a></p>
          <div className="col-sm-6 col-xs-6 col-md-9 col-lg-12">
            <img src={WorkScheduler} style={{width:'300px', fontSize: '10px'}} id="bio-image" alt="Workday Scheduler" />
          </div>
        </div>
        <div className="rows" id="row-group">
          <p style={{textAlign: 'center'}}><a href="https://nikstar-1.github.io/NewQuiz-Week4/." id="websiteLink" target="_blank" rel="noreferrer">Click here to view: Web Developers Quiz</a></p>
          <div className="col-sm-6 col-xs-6 col-md-9 col-lg-12">
            <img src={CodeQuiz} style={{width:'300px', fontSize: '10px'}} id="bio-image" alt="Code Quiz" />
          </div>
        </div>
      </div>
    </div></div>
);
}


export default Portfolio
