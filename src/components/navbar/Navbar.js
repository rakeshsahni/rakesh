import React, { useState } from "react";
import { navbarData } from "./navbarData";
import "./Navbar.css";
import { Dehaze, Close } from "@mui/icons-material";
import MP from './../../images/logo.png'
const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const handleShow = () => {
    setMobile((pre) => !pre);
  };
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#home" onClick={() => setMobile(false)}>
          <img src={MP} alt='rakesh'/>
        </a>
      </div>
      <div className="right-itm">
        <div className="mobile">
          {mobile ? (
            <Close onClick={handleShow} />
          ) : (
            <Dehaze onClick={handleShow} />
          )}
        </div>
        <ul className="desktop">
          {navbarData.map((dt, indx) => {
            return (
              <li className={dt.dcn} key={indx} >
                <a href={`#${dt.path}`}>
                  <span>{dt.icon}</span>
                  {dt.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <ul className={mobile ? "mobile-view active" : "mobile-view"}>
        {navbarData.map((dt, indx) => {
          return (
            <li className={dt.cn} key={indx} >
              <a href={`#${dt.path}`} onClick={handleShow}>
                <span>{dt.icon}</span>
                {dt.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
