import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
class Contact extends React.Component {
  constructor(props) {
    super(props);
    AOS.init();
  }
  render() {
    return (
      <div data-aos="flip-right">
        <section className="contact r-p bg-sec" id="contact">
          <div className="container text-center">
            <div className="row">
              <div className="col way-fade-left">
                <h2>Contact</h2>
                <p>Feel free to contact me</p>
              </div>
            </div>
            <div className="row mt-5 way-fade-left">
              <div className="col-md-6">
                <div className="r-icon">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <div className="text-center">
                  <h5>Get in touch</h5>
                </div>
              </div>
              <div className="col-md-6">
                <div className="r-icon">
                  <i className="far fa-envelope"></i>
                </div>
                <div className="text-center">
                  <h5>Email</h5>
                  <p>rk_787@hotmail.co.uk</p>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col">
                <form>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      rows="7"
                      placeholder="Type a message"
                      style={{ resize: "none" }}
                    ></textarea>
                  </div>
                  {/* <a href="mailto:someone@yoursite.com?cc=someoneelse@theirsite.com, another@thatsite.com, me@mysite.com&bcc=lastperson@theirsite.com&subject=Big%20News">
                    Email Us
                  </a> */}
                  <button type="submit" className="btn r-btn float-center">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
