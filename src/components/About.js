import React from 'react';
import '../App.css';



  function About() {
  return (
    <div id="intro" class="view">
        <div class="container">
        </div>
        <h2 class="ml3">Welcome to my Website</h2> 
        
  </div>
  )
  }
  var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          {/* Hello world */}
          <div className="awesome" style={{border: '1px solid red'}}>
            <label htmlFor="name">Enter your name: </label>
            <input type="text" id="name" />
          </div>
          <p> </p><div id="intro" className="view">
            <div className="container">
              <section className="row">
                <div id="containerOne" className="col-md-6">
                  <h2 className="ml3">Welcome to my Website</h2> 
                  <hr />
                  <img src="images/IMG_0567.jpeg" className="center" alt="photo-of-me" id="about-photo" />
                  <p>Hi, My name is Rekha. I am currently working in Aviation as an On-Board Manager. I'm looking forward to stepping into the world of Technology, Web Development/Software. I want to become a web developer because I love solving problems, i like how the industry moves quickly, and constantly. It'll be a place I can create amazing projects, and bring out my creative side. Future: create software for clients ranging from individuals and small-businesses all the way to large enterprise corporations. 
                    <br />Full stack Web Development. 
                    Experience in Front and Backend technologies. Frameworks inc: Bootstrap and Semantic UI. Languages: HTML5, CSS, JQuery, JavaScript, ReactJS and JSON. Technologies: Handlebars, Node.js.</p>
                </div>
              </section>
              <div className="progress">
                <div className="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                  100% HTML Complete 
                </div>
              </div>
              <div className="progress">
                <div className="progress-bar progress-bar-info progress-bar-striped" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                  100% CSS Complete 
                </div>
              </div>
              <div className="progress">
                <div className="progress-bar progress-bar-warning progress-bar-striped" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '95%'}}>
                  95% jquery/JSON
                </div>
              </div>
              <div className="progress">
                <div className="progress-bar progress-bar-danger progress-bar-striped" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}}>
                  70% JavaScript 
                </div>
              </div>
              <div className="progress">
                <div className="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}> 
                  80% Full Stack Web Development Completed
                </div>
              </div>
            </div>
          </div>
          <p />
        </div>
      );
    }
  });

  export default About;
  