import React from "react";
import "../App.css";
import TravelTracker from "./images/TravelTracker.png";
import Burger from "./images/Burger.png";
import NoteTaker from "./images/NoteTaker.png";
import CurrencyConverter from "./images/CurrencyConverter.png";
import Weather from "./images/Weather.png";
import Horiseon from "./images/Horiseon.png";
import Password from "./images/Password.png";
import WorkScheduler from "./images/WorkScheduler.png";
import CodeQuiz from "./images/CodeQuiz.png";

const showAllCards = () => {
  return (
    <div>
      {/* card four */}
      <div className="card">
        <img className="card-img-top" src={NoteTaker} id="bio-image" alt="Burger App" />

        <div className="card-body">
          <h5 className="card-title">Note Taker App</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

          <a className="btn btn-primary" href="https://quiet-atoll-71792.herokuapp.com/" id="websiteLink" target="_blank" rel="noreferrer">
            View
          </a>
        </div>
      </div>

      {/* card five */}
      <div className="card">
        <img className="card-img-top" src={CurrencyConverter} id="bio-image" alt="project1" />

        <div className="card-body">
          <h5 className="card-title">Project 1 Currency Converter</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

          <a className="btn btn-primary" href="https://nikstar-1.github.io/exchange-away/" id="websiteLink" target="_blank" rel="noreferrer">
            View
          </a>
        </div>
      </div>
      {/* card six  */}
      <div className="card">
        <img className="card-img-top" src={Weather} id="bio-image" alt="Weather Dashboard" />

        <div className="card-body">
          <h5 className="card-title">Card title that wraps to a new line</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

          <a className="btn btn-primary" href="https://nikstar-1.github.io/weather-dashboard/" id="websiteLink" target="_blank" rel="noreferrer">
            View
          </a>
        </div>
      </div>

      {/* card seven */}
      <div className="card">
        <img className="card-img-top" src={Horiseon} id="bio-image" alt="Horiseon" />

        <div className="card-body">
          <h5 className="card-title">Card title that wraps to a new line</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

          <a className="btn btn-primary" href="https://nikstar-1.github.io/01-Code-Refactor/" id="websiteLink" target="_blank" rel="noreferrer">
            View
          </a>
        </div>
      </div>

      {/* card eight */}
      <div className="card">
        <img className="card-img-top" src={Password} id="bio-image" alt="Password Generator" />

        <div className="card-body">
          <h5 className="card-title">Card title that wraps to a new line</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

          <a className="btn btn-primary" href="https://nikstar-1.github.io/new-password-generator/" id="websiteLink" target="_blank" rel="noreferrer">
            View
          </a>
        </div>
      </div>

      {/* card nine */}
      <div className="card">
        <img className="card-img-top" src={TravelTracker} id="bio-image" alt="Travel Tracker" />

        <div className="card-body">
          <h5 className="card-title">Card title that wraps to a new line</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

          <a className="btn btn-primary" href="https://nikstar-1.github.io/work-day-scheduler-new/" id="websiteLink" target="_blank" rel="noreferrer">
            View
          </a>
        </div>
      </div>
    </div>
  );
};

class Portfolio extends React.Component {
  state = {
    showall: false,
    showallbtn:true
  };

  render() {
    return (
      <div id="intro" className="view">
        <div className="container p-4 mb-4">
          {/* card columsn*/}
          <div className="card-columns">
            {/* card one  */}
            <div className="card">
              <img className="card-img-top" src={TravelTracker} id="bio-image" alt="Travel Tracker" />

              <div className="card-body">
                <h5 className="card-title">Card title that wraps to a new line</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            {/* card two  */}
            <div className="card">
              <img className="card-img-top" src={TravelTracker} id="bio-image" alt="Travel Tracker" />

              <div className="card-body">
                <h5 className="card-title">Travel Tracker</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="https://travel-tracker-2021.herokuapp.com/" className="btn btn-primary">
                  View
                </a>
              </div>
            </div>

            {/* card three */}
            <div className="card">
              <img className="card-img-top" src={Burger} id="bio-image" alt="Burger App" />

              <div className="card-body">
                <h5 className="card-title"> Burger App</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a
                  className="btn btn-primary"
                  href="https://still-atoll-89134.herokuapp.com/burgers"
                  id="websiteLink"
                  target="_blank"
                  rel="noreferrer"
                >
                  View
                </a>
              </div>
            </div>
{this.state.showallbtn ? ( <a
              className="btn btn-primary"
              id="websiteLink"
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                this.setState({
                  showall: true,
                  showallbtn:false
                });
              }}
            >
              Show More
            </a>) : null}
           

            {this.state.showall ? showAllCards() : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
