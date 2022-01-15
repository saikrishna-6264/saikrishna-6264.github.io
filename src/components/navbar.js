import React, { Component } from "react";
import SaiImg from "../assets/Sai.png";

export class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="logo">
          <img className="logo-img" src={SaiImg} alt="Logo" />
        </div>
        <div className="spacer"></div>
        <div className="nav-item">
          <p className="nav-title">Service</p>
        </div>
        <div className="nav-item">
          <p className="nav-title">Work</p>
        </div>
        <div className="nav-item">
          <p className="nav-title">Notes</p>
        </div>
        <div className="nav-item">
          <p className="nav-title">Experience</p>
        </div>
        <div className="mid-h-divider"></div>
        <div className="nav-item">
          <p className="nav-title">+91 9108608881</p>
        </div>
        <div className="mid-h-divider"></div>
      </div>
    );
  }
}

export default NavBar;
