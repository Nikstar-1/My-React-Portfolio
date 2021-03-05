import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faInstagram,
    faLinkedinIn,
    faGithub
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div class="social-container">
      <h3>Follow me on social media</h3>
      <div class="social-container">
      <h3>Social Follow</h3>
      <a href="https://www.youtube.com/c/jamesqquick"
  className="youtube social">
  <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
</a>
<a href="https://www.facebook.com/learnbuildteach/"
  className="facebook social">
  <FontAwesomeIcon icon={faGithub} size="2x" />
</a>
<a href="https://www.twitter.com/jamesqquick" className="twitter social">
  <FontAwesomeIcon icon={faTwitter} size="2x" />
</a>
<a href="https://www.instagram.com/learnbuildteach"
  className="instagram social">
  <FontAwesomeIcon icon={faInstagram} size="2x" />
</a>
</div>
    </div>
    
  );
}
