import React from "react";
import "./contactForm.scss";
import phoneIcon from "../../assets/icons/phone.png";
import emailIcon from "../../assets/icons/mail.png";
import mapMarker from "../../assets/icons/mapMarker.png";
import linkedInIcon from "../../assets/icons/linkedin.svg";
import githubIcon from "../../assets/icons/github.svg";

function ContactForm() {
  return (
    <div className="contactContainer">
      <div className="myInfoContainer">
        <h4 className="contactHeader">Contact Information</h4>
        <div className="iconWrapper">
          <div className="iconContainer">
            <img src={phoneIcon} alt="phone icon" />
            <span className="infoText">(843)214-3314</span>
          </div>
          <div className="iconContainer">
            <img src={emailIcon} alt="email icon" />
            <span className="infoText">BrianWardFo8@gmail.com</span>
          </div>
          <div className="iconContainer">
            <img src={mapMarker} alt="map marker icon" />
            <span className="infoText">2217 N Hwy 17a Bonneau, SC 29431</span>
          </div>
        </div>
        <div className="socialLinkContainer">
          <a href="https://www.linkedin.com/in/michael-brian-ward-6494951b2/">
            <img
              className="socialIcons"
              src={linkedInIcon}
              alt="linkedIn logo"
            />
          </a>
          <a href="https://github.com/Bwardstories">
            <img className="socialIcons" src={githubIcon} alt="github logo" />
          </a>
        </div>
      </div>
      <form>
        <div className="col">
          <div className="form-group">
            <label>First Name</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" />
          </div>
        </div>
        <div className="col">
          <div className="form-group">
            <label>Email</label>
            <input type="email" />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="tel" />
          </div>
        </div>
        <div className="col2">
          <div className="form-group">
            <label>What type of website do you need?</label>
            <div id="radio-buttons">
              <div className="radio-button">
                <label className="radio-label">
                  <input type="radio" name="type" value="E-Commerce" />
                  E-commerce
                </label>
              </div>
              <div className="radio-button">
                <label className="radio-label">
                  <input type="radio" name="type" value="Personal" />
                  Personal
                </label>
              </div>
              <div className="radio-button">
                <label className="radio-label">
                  <input type="radio" name="type" value="Landing Page" />
                  Landing Page
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="col3">
          <div className="form-group">
            <label>Message</label>
            <textarea></textarea>
          </div>
        </div>
        <div className="col4">
          <div className="form-group">
            <button className="primary" type="submit">
              SEND MESSAGE
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
