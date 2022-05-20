import React from "react";
import "./Info.css";
import MP from "./../../images/my-photo.png";
// import LI from './../../images/linkedin.png';

const ButtonMailto = ({ mailto, label }) => {
  return (
    <button
      onClick={(e) => {
        window.location = mailto;
      }}
    >
      {label}
    </button>
  );
};

function Info() {
  return (
    <div id="home" className="info">
      <div className="info-content">
        <div className="my-name">MY NAME IS RAKESH SAHNI.</div>
        <h1 className="mldl">
          I Am Machine Learning and Deep Learning Professional with 3+ years of hands on experience in
          <br /> 
          Machine Learning Algorithms, ANN, CNN, RNN, Python, SQL, Python Opps.
        </h1>
        <div className="o-info">
          I am studying B.E. from Computer Science.
          <br /> I also Work On Web Development and MERN Stack.
        </div>
        {/* <button>Contact Me</button> */}
        <ButtonMailto
          label="Contact Me"
          mailto="mailto:rakeshgon123@gmail.com"
        />
      </div>
      <div className="info-img">
        <a
          href="https://in.linkedin.com/in/rakesh-sahni-7b1b581b6"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={MP} alt="rakesh" />
        </a>
      </div>
    </div>
  );
}

export default Info;
