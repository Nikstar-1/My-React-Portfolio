import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
class SocialFollow extends React.Component {
  constructor(props) {
    super(props);
    AOS.init({
      duration: 1000,
      offset: 100,
    });
  }
  render() {
    return (
      <div className="social-container text-center " data-aos="flip-down">
        <h3>Follow me on social media</h3>
        <div className="social-container">
          <h3>Social Follow</h3>
          <a
            href="https://www.linkedin.com/in/rekha-kumari-b9493a1b5"
            className="social"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
          </a>
          <a href="https://github.com/Nikstar-1" className="github social">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://www.twitter.com/NNikstar1"
            className="twitter social"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a
            href="https://www.instagram.com/nikstar.1/"
            className="instagram social"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </div>
    );
  }
}
export default SocialFollow;
