import React from "react";
import ReactDom from "react-dom";

import "react-slideshow-image/dist/styles.css";

//import the css file below
//MAKE SURE TO CAPIYALIZE CONST NAMES OR IT WONT WORK
import "./index.css";
import Linkify from "react-linkify";
import { FaMailBulk } from "react-icons/fa";
import { Slide } from "react-slideshow-image";

function BookList() {
  return (
    <div className="ttab">
      <Tab />
      <Slideshow></Slideshow>
      <Footer />
    </div>
  );
}

const Tab = () => {
  return (
    <div className="topnav">
      <a className="active" href="#home">
        Home
      </a>
      <a href="#about">About</a>
      <a href="#joining">Joining</a>
      <a href="#contact us">Contact Us</a>

      {/* <button className="tabLink" onClick="('Hi there')">
        Help
      </button>
      <button className="tabLink" onClick="Hi there">
        FAQ
      </button>
      <button className="tabLink" onClick="Hi there">
        Sign Up
      </button> */}
    </div>
  );
};

// const Images = () => (
//   <div className="images2">
//     <img
//       className="images"
//       src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udmVyc2F0aW9ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
//       alt=""
//     ></img>
//     <div className="centered">Welcome! Join us!</div>
//   </div>
// );

const Footer = () => (
  <div className="footer">
    <FaMailBulk />

    <p>Contact Us</p>
    <Linkify target="_blank">Email at: belissa.baez.28@gmail.com</Linkify>
  </div>
);

const slideImages = ["/slide1.jpeg", "/slide2.jpeg", "/slide3.jpeg"];

const Slideshow = () => {
  return (
    <div>
      <Slide easing="ease">
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
            <span>Collaboration</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
            <span>Respect</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
            <span>Team Work</span>
          </div>
        </div>
      </Slide>
    </div>
  );
};

ReactDom.render(<BookList></BookList>, document.getElementById("root"));
