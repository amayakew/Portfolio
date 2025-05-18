import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import emailjs from '@emailjs/browser';

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_v4m01ia', 'template_wwkrf3u', e.target, 'xnC-YhrtiHVRFeQPN')
    .then((result) => {
      console.log('Message sent', result.text);
    }, (error) => {
      console.log('Failed to send', error.text);
    });
};

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-main-heading">
          <h1 className="heading contact-title">{contactInfo.title}</h1>
        </div>
     
        <div className="contact-div-main">
          <div className="contact-header">
            
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {contactInfo.subtitle}
            </p>
            <div
              className={
                isDark ? "dark-mode contact-text-div" : "contact-text-div"
              }
            >
              <SocialMedia />
            </div>
          <div className="contact-form-section">
            <form className="contact-form-container" onSubmit={sendEmail}>
              <div className="form-element">
                <input placeholder="Name" type="text" name="name" required />
              </div>
              <div className="form-element">
                <input placeholder="Email" type="email" name="email" required />
              </div>
              <div className="form-element">
                <textarea placeholder="Your message..." name="message" required />
              </div>
              <button type="submit">Send</button>
            </form>
          </div>
          </div>
          <div className="contact-image-div">
            <img
              alt="Girl working"
              src={require("../../assets/images/contact.png")}
            ></img>
          </div>
        </div>
      </div>
    </Fade>
  );
}
