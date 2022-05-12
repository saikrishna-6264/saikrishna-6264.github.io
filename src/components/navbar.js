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
        <div className="nav-list">
          <div className="nav-item">
            <p className="nav-title nav-active">SERVICE</p>
          </div>
          <div className="nav-item">
            <p className="nav-title">MY WORK</p>
          </div>
          <div className="nav-item">
            <p className="nav-title">PROJECTS</p>
          </div>
          <div className="nav-item">
            <p className="nav-title">CONTACT ME</p>
          </div>
          <div className="mid-h-divider"></div>
        </div>
        <div className="burger">
          <div className="burger-line line-1"></div>
          <div className="burger-line line-2"></div>
          <div className="burger-line line-3"></div>
        </div>
      </div>
    );
  }
}

export default NavBar;
