import React, { Component } from "react";
import SaiImage from "../assets/Sai.png";
import graphic from "../assets/icons/tools.png";
import ui from "../assets/icons/design.png";
import code from "../assets/icons/coding.png";
import likemindz from "../assets/work/likemindz.png";
import shopperspace from "../assets/work/shopperspace.png";
import freelance from "../assets/work/freelance.png";
import shopperspaceProject from "../assets/projects/shopperspace.png";

export class LandingPage extends Component {
  render() {
    return (
      <main className="landing">
        <div className="lg-section main">
          <div className="split mx-h">
            <div className="content-left">
              <header className="heading">
                <h1>Hey There,</h1>
                <h1>I'm Sai Krishna</h1>
              </header>
              <a className="mail" href="mailto:saikrishna.peddini@gmail.com">
                saikrishna.peddini@gmail.com
              </a>
              <div className="split exp">
                <h1>2</h1>
                <div className="content">
                  <p>Years</p>
                  <p>Experience</p>
                </div>
              </div>
            </div>
            <div className="content-right">
              <div className="qoute-container">
                <p className="qoute">”DESIGN IS NOT JUST WHAT IT LOOKS AND FEELS LIKE DESIGN IS HOW IT WORKS “.</p>
                <p className="author">- STEVE JOBS</p>
              </div>
              <div className="work-field">
                <p>PROFESSIONAL</p>
                <p>UI/ UX DESIGNER</p>
                <p>FRONT END DEVELOPER</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg-section split skills">
          <div className="tech-list">
            <div className="tech-card">
              <div className="tech-icon-container grn-col">
                <img className="tech-icon" src={ui} alt="TechImg" />
              </div>
              <div className="content">
                <h2>UI/UX Design</h2>
                <p>Design is the initial building block of developing product, The best UX/UI design can make user reach the goal flawlessly.</p>
              </div>
            </div>
            <div className="tech-card">
              <div className="tech-icon-container orn-col">
                <img className="tech-icon" src={graphic} alt="TechImg" />
              </div>
              <div className="content">
                <h2>Graphic Design</h2>
                <p>The Graphic Assets can make user more interactive with Application and will educate user to navigate.</p>
              </div>
            </div>
            <div className="tech-card">
              <div className="tech-icon-container red-col">
                <img className="tech-icon" src={code} alt="TechImg" />
              </div>
              <div className="content">
                <h2>Web Application Development</h2>
                <p>The Web App is coded with Enterprise standards to increase the Digital footprint of the client with Absolute Care</p>
              </div>
            </div>
          </div>
          <div className="mid-h-divider"></div>
          <div className="skills-content">
            <h1>What do i help?</h1>
            <p>I will help you to empower digitally By building entriprise level web applications, and will provide you best in class graphic solution.</p>
          </div>
        </div>
        <div className="lg-section experience">
          <h1 className="heading">My Work Experience</h1>
          <div className="split mx-h">
            <div className="content-left">
              <div className="work-card">
                <img className="work-img" src={freelance} alt="Freelance" />
                <div className="content">
                  <h1>Freelance</h1>
                  <p>Jan 2019 - Aug 2020</p>
                </div>
              </div>
              <div className="work-card">
                <img className="work-img" src={likemindz} alt="Likemindz" />
                <div className="content">
                  <h1>Likemindz</h1>
                  <p>Sep 2020 - Present</p>
                </div>
              </div>
              <div className="work-card">
                <img className="work-img" src={shopperspace} alt="ShopperSpace" />
                <div className="content">
                  <h1>Shopper Space</h1>
                  <p>Jan 2021 - Present</p>
                </div>
              </div>
            </div>
            <div className="content-right">
              <div className="exp-card">
                <div className="dot-container ani-grn-col">
                  <div className="dots">
                    <div className="dot grn-col"></div>
                  </div>
                  <div className="line"></div>
                </div>
                <div className="body">
                  <h2>UX/UI Design</h2>
                  <p>To be a designer Enphathy is demanded quality, with my intuitiveness and openness to understand user made me to design mobile and web application that are easy to use</p>
                </div>
              </div>
              <div className="exp-card">
                <div className="dot-container ani-red-col">
                  <div className="dots">
                    <div className="dot red-col"></div>
                  </div>
                  <div className="line"></div>
                </div>
                <div className="body">
                  <h2>Graphic Design</h2>
                  <p>My Love towards Design, Art Never faded i explored different types of Design methods and Art to provide best graphic assets and also Graphic solutions.</p>
                </div>
              </div>
              <div className="exp-card">
                <div className="dot-container ani-orn-col">
                  <div className="dots">
                    <div className="dot orn-col"></div>
                  </div>
                  <div className="line"></div>
                </div>
                <div className="body">
                  <h2>Web Front-End Developer</h2>
                  <p>As a Front-End developer i bare the responsibility of devoloping UI to provide best Aesthetics for the end user with out comprimising performance, structure, standards of the code</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg-section work">
          <div className="split">
            <div className="heading">
              <h1>My Recent Projects</h1>
              <p>Perfect solution for digital experience</p>
            </div>
            <div className="spacer"></div>
            <a className="more-work" href="ahad">
              <h2>Explore more works</h2>
            </a>
          </div>
          <div className="projects-list">
            <a className="project-card" href="https://nithinnic.me/work/shopperspace">
              <img className="product" src={shopperspaceProject} alt="ProductImage" />
            </a>
          </div>
        </div>
        <div className="lg-section clients">
          <h1 className="heading">People Talk About Us</h1>
          <p>Perfect solution for digital experience Perfect solution for digital experience</p>
          <p>Perfect solution for digital experience</p>
          <div className="client-list">
            <div className="client-card">
              <div className="avatar-container">
                <img className="avatar" src={SaiImage} alt="ClientImage" />
              </div>
              <p className="comment">"This is the best website design I have ever seen. I am so happy is very good"</p>
              <hr />
              <div className="client-info">
                <h2>Channakeshava Gowda</h2>
                <p>Developer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg-section contact">
          <div className="split mx-h">
            <div className="heading-container">
              <div className="heading">
                <h1>Let's Make Something</h1>
                <h1>Amazing Together.</h1>
              </div>
              <h1 className="description">
                Start by <a href="sd">saying hi</a>
              </h1>
            </div>
            <div className="info">
              <div className="content">
                <h1>Information</h1>
                <h3>Information</h3>
              </div>
              <p>Services</p>
              <p>Work</p>
              <p>Notes</p>
              <p>Experience</p>
            </div>
          </div>
          <hr />
          <footer className="footer">
            <img className="logo" src={SaiImage} alt="LogoImage" />
            <p className="rights">©2021. All rights Reserved</p>
            <div className="spacer"></div>
          </footer>
        </div>
      </main>
    );
  }
}

export default LandingPage;
