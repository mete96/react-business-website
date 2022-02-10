import React from "react";
import "./Services.css";
import commerce from "./commerce.png";
import pencil from "./pencil.png";
import lodo from "../lodo.jpg";
import { Link } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";

const Services = () => {
  return (
    <>
      <Header />
      <Home />
      <div className="third-container">
        <div className="third3">
          <h2 className="title3"> Services</h2>
          <p className="desc3">
            We are deeply committed to the growth and success of our clients.
          </p>
        </div>
      </div>

      <div className="box-container">
        <div className="av1">
          <img
            src={
              "https://avantisnet.netlify.app/static/media/itconsultancy_image.ccf70f2899aecc7fc8ef.png"
            }
          />
          <h2>IT CONSULTING</h2>
          <p>
            All of our professionals knowledge and insight is at your disposal
            to provide you with the information you need to successfully design
            and manage.
          </p>
        </div>

        <div className="av2">
          <img
            src={
              "https://avantisnet.netlify.app/static/media/workplaceeducation_image.12d5935abe8e32e68c2d.png"
            }
          />
          <h2>WORKPLACE EDUCATION</h2>
          <p>
            Today’s generation of workers have put employee education and
            development high on their list of the most-desired benefits that a
            company can offer.
          </p>
        </div>

        <div className="av3">
          <img src={commerce} />
          <h2>WORKPLACE EDUCATION</h2>
          <p>
            Today’s generation of workers have put employee education and
            development high on their list of the most-desired benefits that a
            company can offer.
          </p>
        </div>

        <div className="av4">
          <img src={pencil} />
          <h2>H/W Maintenance</h2>
          <p>
            We will get everything done for you. From maintaining PC,
            implementing network equipments, and other devices like Fax and
            Printers. PC, network equipements, fax, printers
          </p>
        </div>
      </div>

      <div className="four-container">
        <div className="left">
          {" "}
          <h1>Analysis & Strategy</h1>
          <p>
            We don’t only listen to your needs, we dive deep into historic
            performance data and identify what works and what doesn’t. This
            fuels our information architecture, content strategy, and design.
          </p>
        </div>
        <div className="right">
          <h1>Post Launch</h1>
          <p>
            Post-launch on digital marketing efforts, web design changes,
            development improvements, or simply keeping their website up-to-date
            with the latest browser and security updates.
          </p>
        </div>
      </div>

      <div className="ortala">
        <div className="br">
          {" "}
          <h2 className="port">PORTFOLIO</h2>
        </div>
      </div>
      <div className="portfolio">
        <div className="first">
          <h2>MoliEats</h2>
          <p>
            Complete Restaurant Management App created in Xamarin Technology.
            There is Owner, Admin, Customer and Our Delivery Boy for peforming
            respective tasks.
          </p>
        </div>

        <div className="second">
          <h2>FlutterFirebase</h2>
          <p>
            Todo App created in Flutter and Firebase Framework. Through this
            app, you can easily make Todo and keep check of your schedule.
          </p>
        </div>

        <div className="third">
          <h2>Pengu Inventive</h2>
          <p>
            Beautiful, Durable and Multi Purpose Pengu Inventive is a direct to
            customer brand. Which started with mission to be leader in Space
            saving furniture.
          </p>
        </div>

        <div className="fourth">
          <h2>GPS Tracker</h2>
          <p>
            Easily Track the location by fetching the current coordinates of the
            user. We can easily get the Lattitude and Longitude that will help
            to fetch the user current location. This is design in Flutter
            Framework.
          </p>
        </div>
      </div>

      <div className="contact1">
        <h2>Are you ready to scale your business?</h2>
        <p>Get in touch and let us build something amazing together!</p>
        <h4>+844 2421 599 12</h4>
      </div>
    </>
  );
};

export default Services;
