import React from "react";

import TravelTracker from "./images/TravelTracker.png";
import Burger from "./images/Burger.png";
import NoteTaker from "./images/NoteTaker.png";
import ExchangeAway from "./images/ExchangeAway.png";
import Weather from "./images/Weather.png";
import Horiseon from "./images/Horiseon.png";
import Password from "./images/Password.png";
import Product_Managment_Database from './images/Product_Managment_Database.png';
import GoogleBooks from "./images/GoogleBooks.png";
import TemplateEngineEmployeeSummary from './images/TemplateEngineEmployeeSummary.png';


// import WorkScheduler from "./images/WorkScheduler.png";
// import CodeQuiz from "./images/CodeQuiz.png";
import AOS from "aos";
import "aos/dist/aos.css";
const showAllCards = () => {
  return (
    <div>
      <div className="card-deck mt-4">
        {/* card four */}
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
            This is an application that can be used to write, save, and delete notes. This application will use an express backend to save and retrieve note data from a JSON file.


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
            src={ExchangeAway}
            id="bio-image"
            alt="ExchangeAway"
          />

          <div className="card-body">
            <h5 className="card-title">Exchange Away</h5>
            <p className="card-text">
            Exchange-Away website will give you the best way to exchange your money, and save your valuable time when you travel. This is the core functionality we are offering. However, we are integrating this feature with the weather forecast as an extra feature made available to our prospective users to enable them get first hand up-to date weather information to where they are visiting.

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
            <h5 className="card-title">Weather Dashboard</h5>
            <p className="card-text">
            This project is a weather dashboard with search functionality to find current weather conditions and forecasted weather for cities all over the world.

            It uses the OpenWeather API to retrieve data for the cities, AJAX to hook into the API to retrieve the data in JSON format,

            dynamically updated HTML and CSS powered by jQuery,

            and displays a search history which the user can click to access past cities searched via local storage.


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
            <h5 className="card-title">Horiseon</h5>
            <p className="card-text">
            Website Title and Description Horiseon - All About Marketing, Is a company that works towards improving websites through 3 key areas, those being; Search Engine Optimisation, Online Reputation Management, and Social Media Marketing.
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
            <h5 className="card-title">Password Generator</h5>
            <p className="card-text">
            Password Generator is an application that an employee can use to generate a random password based on criteria they’ve selected. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code. It has a clean and polished user interface that is responsive, ensuring that it adapts to multiple screen sizes.


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
            src={GoogleBooks}
            id="bio-image"
            alt="GoogleBooks"
          />

          <div className="card-body">
            <h5 className="card-title">Google Books</h5>
            <p className="card-text">
             React-based Google Books Search app that displays books on user searches. Users can save them to review or purchase later.

            Save button to save the book to the database. View button to view the book on Google Books.
            </p>

            <a
              className="btn btn-primary"
              href="https://ancient-fjord-00190.herokuapp.com/"
              id="websiteLink"
              target="_blank"
              rel="noreferrer"
            >
              View
            </a>
          </div>
        </div>
        <div className="card-deck mt-4">
         {/* card ten */}
         <div className="card" data-aos="fade-up">
          <img
            className="card-img-top"
            src={TemplateEngineEmployeeSummary}
            id="bio-image"
            alt="Template-Engine-Employee-Summary"
          />

          <div className="card-body">
            <h5 className="card-title">Template-Engine-Employee-Summary</h5>
            <p className="card-text">
            A software engineering team generator command line application. The application will prompt the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns. 
            </p>

            <a
              className="btn btn-primary"
              href="https://github.com/Nikstar-1/Template-Engine-Employee-Summary"
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
                  Travel Tracker
                </h5>
                <p className="card-text">
                Travel tracker allows users to save the destinations where they have been, as well as the restaurants, hotels, and travel destinations, giving a more unique individual view, and can

                allow other users to read through these reviews in order to craft their own travel experience.
                </p>
                <a href="https://travel-tracker-2021.herokuapp.com/" className="btn btn-primary">
                  View
                </a>
              </div>
            </div>
            {/* card two  */}
            <div className="card" data-aos="fade-up">
              <img
                className="card-img-top"
                src={Product_Managment_Database}
                id="bio-image"
                alt="Product_Managment_Database"
              />

              <div className="card-body">
                <h5 className="card-title">Product Managment Database</h5>
                <p className="card-text">
               MERN application -

​               An app for companies to internally manage the products that they are listing on distributors sites so they can

               easily upload, store and download information as CSV’s in order to create listings on other websites.​​
                </p>
                <a
                  href="https://desolate-chamber-36305.herokuapp.com/"
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
                Node Express Handlebars
               Eat da burger! is a restaurant app that lets users input the names of burgers they'd like to eat.
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
