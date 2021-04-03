//import React from 'react';
import "./../scss/custom.scss";
import React from "react";
import Image from "react-bootstrap/Image";
import ProfilePhoto from "../components/images/ProfilePhoto.jpg";
//import background from "./images/Background.png";

// import WorkScheduler from "./images/WorkScheduler.png";
// import CodeQuiz from "./images/CodeQuiz.png";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Contact from "./Contact";
import SocialFollow from "./SocialFollow";
import Portfolio from "./Portfolio";

class About extends React.Component {
  // eslint-disable-next-line no-useless-constructor
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
      <div id="intro" className="view mb-5">
        <div className="jumbotron text-center " data-aos="flip-left">
          <div className="text-center">
            <Image
              src={ProfilePhoto}
              className="img-thumbnail profile-img"
              alt="profile"
              roundedCircle
              width="271"
              height="280"
            ></Image>
          </div>
          <h1>Hello, I'm Rekha Kumari.</h1>
          <div className="box-white">
            <div className="typewriter col justify-content-center">
           
              <h1> I'm a Full Stack Web Developer.</h1>
            </div>
            <hr className="my-4" />
            <p>
             
              Hi, My name is Rekha. I am currently working in Aviation as an
              On-Board Manager. I'm looking forward to stepping into the world
              of Technology, Web Development/Software. I want to become a web
              developer because I love solving problems, i like how the industry
              moves quickly, and constantly. It'll be a place I can create
              amazing projects, and bring out my creative side. Future: create
              software for clients ranging from individuals and small-businesses
              all the way to large enterprise corporations. Full stack Web
              Development. Experience in Front and Backend technologies.
              Frameworks inc: Bootstrap and Semantic UI. Languages: HTML5, CSS,
              JQuery, JavaScript, ReactJS and JSON. Technologies: Handlebars,
              Node.js.   
            </p>
            <p className="lead">
              {/* <a className="btn btn-dark btn-lg" href="#" role="button">
                Learn more
              </a> */}
            </p>
          </div>
        </div>
        {/* Portfolio section */}

        <Portfolio />
        <Contact />
        <SocialFollow />
      </div>
    );
  }
}
// const About = () => {

// };

export default About;
