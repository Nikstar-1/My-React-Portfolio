//import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Image from "react-bootstrap/Image";
import "../App.css";
import ProfilePhoto from "../components/images/ProfilePhoto.jpg";
import background from "./images/banner_image.png";
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



class About extends React.Component {
  state = {
    showall: false,
    showallbtn:true
  };


  render() {
    return (
      <div id="intro" classNameName="view">
        <div className="jumbotron text-center">
          <div className="text-center">
            <Image src={ProfilePhoto} classNameName="img-thumbnail profile-img" alt="profile" roundedCircle width="271" height="280"></Image>
          </div>

          <div className="box-white">
          <h1>Rekha Kumari</h1>
            <div class="typewriter col justify-content-center">
              <h1> Welcome to my Website</h1>
            </div>
            <hr className="my-4" />
            <p>
              {" "}
              Hi, My name is Rekha. I am currently working in Aviation as an On-Board Manager. I'm looking forward to stepping into the world of
              Technology, Web Development/Software. I want to become a web developer because I love solving problems, i like how the industry moves
              quickly, and constantly. It'll be a place I can create amazing projects, and bring out my creative side. Future: create software for
              clients ranging from individuals and small-businesses all the way to large enterprise corporations. Full stack Web Development.
              Experience in Front and Backend technologies. Frameworks inc: Bootstrap and Semantic UI. Languages: HTML5, CSS, JQuery, JavaScript,
              ReactJS and JSON. Technologies: Handlebars, Node.js.
            </p>
            <p className="lead">
              <a className="btn btn-dark btn-lg" href="#" role="button">
                Learn more
              </a>
            </p>
          </div>
          </div>
      {/* Portfolio section */}
      <h1 className="text-center">Portfolio</h1>
      <div id="intro" className="view">
        <div className="container p-4 mb-4 text-center">
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

           

            {this.state.showall ? showAllCards() : null}
          </div>
          {this.state.showallbtn ? ( <a
              className="btn btn-primary mb-5  mx-auto"
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
        </div>

        
      </div>





      </div>
    );
  }
}
// const About = () => {

// };

export default About;
