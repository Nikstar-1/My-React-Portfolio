//import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Image from "react-bootstrap/Image";
import '../App.css';
import ProfilePhoto from '../components/images/ProfilePhoto.jpg'


 const About = () => {
  return (
    <div id="intro" class="view">
        <div class="container">
        </div>
        <h2 class="ml3">Welcome to my Website</h2> 
        <div class="img-container" >
           <Image src={ProfilePhoto}  className="img-thumbnail profile-img" alt="profile" roundedCircle width="271" height="280"></Image>
           </div>
        <p>Hi, My name is Rekha. I am currently working in Aviation as an On-Board Manager. I'm looking forward to stepping into the world of Technology, Web Development/Software. I want to become a web developer because I love solving problems, i like how the industry moves quickly, and constantly. It'll be a place I can create amazing projects, and bring out my creative side. Future: create software for clients ranging from individuals and small-businesses all the way to large enterprise corporations. 
              Full stack Web Development. 
               Experience in Front and Backend technologies. Frameworks inc: Bootstrap and Semantic UI. Languages: HTML5, CSS, JQuery, JavaScript, ReactJS and JSON. Technologies: Handlebars, Node.js.</p>
       </div>        
  );
    
} 



  export default About
