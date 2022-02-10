import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import "./Contact.css";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="box-containers">
        <div className="form-container">
          <h1 className="form-title">SEND US A MESSAGE</h1>

          <form className="formzo">
            <div className="inputs">
              <input type="text" placeholder="First Name*" className="ino" />
              <input type="text" placeholder="Last Name*" className="ino" />
              <input type="text" placeholder="Email*" className="ino" />
              <input type="text" placeholder="Phone*" className="ino" />
            </div>
            <div className="grids">
              <textarea>Message...</textarea>
              <button className="send">Send Message</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
