import React from "react";

import TravelTracker from "./images/TravelTracker.png";
import Burger from "./images/Burger.png";
import NoteTaker from "./images/NoteTaker.png";
import CurrencyConverter from "./images/CurrencyConverter.png";
import Weather from "./images/Weather.png";
import Horiseon from "./images/Horiseon.png";
import Password from "./images/Password.png";
// import WorkScheduler from "./images/WorkScheduler.png";
// import CodeQuiz from "./images/CodeQuiz.png";
import AOS from "aos";
import "aos/dist/aos.css";
const showAllCards = () => {
  return (
    <div>
      <div className="card-deck mt-4">
        {/* card 1 */}
        <div className="card" data-aos="fade-up">
          <img
            className="card-img-top"
            src={NoteTaker}
            id="bio-image"
            alt="Burger App"
          />

          <div className="card-body">
            <h5 className="card-title">Note Taker App</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>

            <a
              className="btn btn-primary"
              href="https://quiet-atoll-71792.herokuapp.com/"
              id="websiteLink"
              target="_blank"
              rel="noreferrer"
            >
              View
            </a>
          </div>
        </div>

        {/* card five */}
        <div className="card" data-aos="fade-up">
          <img
            className="card-img-top"
            src={CurrencyConverter}
            id="bio-image"
            alt="project1"
          />

          <div className="card-body">
            <h5 className="card-title">Project 1 Currency Converter</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>

            <a
              className="btn btn-primary"
              href="https://nikstar-1.github.io/exchange-away/"
              id="websiteLink"
              target="_blank"
              rel="noreferrer"
            >
              View
            </a>
          </div>
        </div>
        {/* card six  */}
        <div className="card" data-aos="fade-up">
          <img
            className="card-img-top"
            src={Weather}
            id="bio-image"
            alt="Weather Dashboard"
          />

          <div className="card-body">
            <h5 className="card-title">Card title that wraps to a new line</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>

            <a
              className="btn btn-primary"
              href="https://nikstar-1.github.io/weather-dashboard/"
              id="websiteLink"
              target="_blank"
              rel="noreferrer"
            >
              View
            </a>
          </div>
        </div>
      </div>
      <div className="card-deck mt-4">
        {/* card seven */}
        <div className="card" data-aos="fade-up">
          <img
            className="card-img-top"
            src={Horiseon}
            id="bio-image"
            alt="Horiseon"
          />

          <div className="card-body">
            <h5 className="card-title">Card title that wraps to a new line</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>

            <a
              className="btn btn-primary"
              href="https://nikstar-1.github.io/01-Code-Refactor/"
              id="websiteLink"
              target="_blank"
              rel="noreferrer"
            >
              View
            </a>
          </div>
        </div>

        {/* card eight */}
        <div className="card" data-aos="fade-up">
          <img
            className="card-img-top"
            src={Password}
            id="bio-image"
            alt="Password Generator"
          />

          <div className="card-body">
            <h5 className="card-title">Card title that wraps to a new line</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>

            <a
              className="btn btn-primary"
              href="https://nikstar-1.github.io/new-password-generator/"
              id="websiteLink"
              target="_blank"
              rel="noreferrer"
            >
              View
            </a>
          </div>
        </div>

        {/* card nine */}
        <div className="card" data-aos="fade-up">
          <img
            className="card-img-top"
            src={TravelTracker}
            id="bio-image"
            alt="Travel Tracker"
          />

          <div className="card-body">
            <h5 className="card-title">Card title that wraps to a new line</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>

            <a
              className="btn btn-primary"
              href="https://nikstar-1.github.io/work-day-scheduler-new/"
              id="websiteLink"
              target="_blank"
              rel="noreferrer"
            >
              View
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    AOS.init({
      duration: 1000,
      offset: 300,
    });
  }
  state = {
    showall: false,
    showallbtn: true,
  };

  render() {
    return (
      <div id="intro" className="view my-5">
        <h1 className="text-center">Portfolio</h1>
        <div className="container p-4 mb-4 text-center" data-aos="fade-up">
          {/* card columsn*/}
          <div className="card-deck">
            {/* card one  */}
            <div className="card" data-aos="fade-up">
              <img
                className="card-img-top"
                src={TravelTracker}
                id="bio-image"
                alt="Travel Tracker"
              />

              <div className="card-body">
                <h5 className="card-title">
                  Card title that wraps to a new line
                </h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="https://google.com" className="btn btn-primary">
                  View
                </a>
              </div>
            </div>
            {/* card two  */}
            <div className="card" data-aos="fade-up">
              <img
                className="card-img-top"
                src={TravelTracker}
                id="bio-image"
                alt="Travel Tracker"
              />

              <div className="card-body">
                <h5 className="card-title">Travel Tracker</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a
                  href="https://travel-tracker-2021.herokuapp.com/"
                  className="btn btn-primary"
                >
                  View
                </a>
              </div>
            </div>

            {/* card three */}
            <div className="card" data-aos="fade-up">
              <img
                className="card-img-top"
                src={Burger}
                id="bio-image"
                alt="Burger App"
              />

              <div className="card-body">
                <h5 className="card-title"> Burger App</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
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
          </div>
          {this.state.showall ? showAllCards() : null}
          {this.state.showallbtn ? (
            <span
              className="btn btn-primary mb-5  mx-auto"
              id="websiteLink"
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                this.setState({
                  showall: true,
                  showallbtn: false,
                });
              }}
            >
              Show More
            </span>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Portfolio;
