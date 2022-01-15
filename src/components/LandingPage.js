import React, { Component } from "react";
import SaiImage from "../assets/Sai.png";

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
              <a className="mail" href>
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
              <div className="description">
                <p>I Design beautifully simple</p>
                <p>things. And love what do</p>
              </div>
              <div className="work-field">
                <p>IF CRETIFID</p>
                <p>PROPATIONAL</p>
                <p>UlUX DESIGNER</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg-section split skills">
          <div className="tech-list">
            <div className="tech-card">
              <img className="tech-icon" src={SaiImage} alt="TechImg" />
              <div className="content">
                <h2>Website Design</h2>
                <p>10+ Projects</p>
              </div>
            </div>
            <div className="tech-card">
              <img className="tech-icon" src={SaiImage} alt="TechImg" />
              <div className="content">
                <h2>Web Design</h2>
                <p>10+ Projects</p>
              </div>
            </div>
            <div className="tech-card">
              <img className="tech-icon" src={SaiImage} alt="TechImg" />
              <div className="content">
                <h2>Web Design</h2>
                <p>10+ Projects</p>
              </div>
            </div>
          </div>
          <div className="mid-h-divider"></div>
          <div className="skills-content">
            <h1>What do i help?</h1>
            <p>I will help vou with fingina a solution and solve</p>
            <p>your problems, We use process design to create digital</p>
            <p>Poroducts. besias thata so helo their ousiness.</p>
            <br />
            <p>We use process design to create digital products</p>
            <p>Besids that also helo their business.</p>
            <div className="split">
              <div className="skill-comp">
                <h1>19+</h1>
                <p>Projects</p>
              </div>
              <div className="skill-comp">
                <h1>19+</h1>
                <p>Projects</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg-section experience">
          <h1 className="heading">My Work Experience</h1>
          <div className="split mx-h">
            <div className="content-left">
              <div className="content">
                <h1>Web Design</h1>
                <p>Sep 2016 - Aug 2021</p>
              </div>
              <div className="content">
                <h1>Web Design</h1>
                <p>Sep 2016 - Aug 2021</p>
              </div>
              <div className="content">
                <h1>Web Design</h1>
                <p>Sep 2016 - Aug 2021</p>
              </div>
            </div>
            <div className="content-right">
              <div className="exp-card">
                <div className="dot-container">
                  <div className="dots">
                    <div className="dot"></div>
                  </div>
                  <div className="line"></div>
                </div>
                <div className="body">
                  <h2>Web Design</h2>
                  <p>Sep 2016 - Aug 2021</p>
                </div>
              </div>
              <div className="exp-card">
                <div className="dot-container">
                  <div className="dots">
                    <div className="dot"></div>
                  </div>
                  <div className="line"></div>
                </div>
                <div className="body">
                  <h2>Web Design</h2>
                  <p>Sep 2016 - Aug 2021</p>
                </div>
              </div>
              <div className="exp-card">
                <div className="dot-container">
                  <div className="dots">
                    <div className="dot"></div>
                  </div>
                  <div className="line"></div>
                </div>
                <div className="body">
                  <h2>Web Design</h2>
                  <p>Sep 2016 - Aug 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg-section work">
          <div className="split">
            <div className="heading">
              <h1>My Latest Work</h1>
              <p>Perfect solution for digital experience</p>
            </div>
            <div className="spacer"></div>
            <a className="more-work" href="ahad">
              <h2>Explore more works</h2>
            </a>
          </div>
          <div className="projects-list">
            <img className="product" src={SaiImage} alt="ProductImage" />
          </div>
        </div>
        <div className="lg-section clients">
          <h1>People Talk About Us</h1>
          <p>Perfect solution for digital experience Perfect solution for digital experience</p>
          <p>Perfect solution for digital experience</p>
          <div className="client-list">
            <div className="client-card">
              <div className="avatar-container">
                <img className="avatar" src={SaiImage} alt="ClientImage" />
              </div>
              <p className="comment">"This is the best website design I have ever seen. I am so happy is very good"</p>
              <hr />
              <h2>Channakeshava Gowda</h2>
              <p>Developer</p>
            </div>
          </div>
        </div>
        <div className="lg-section contact">
          <div className="split mx-h">
            <div className="heading-container">
              <div className="heading">
                <h1>Let's make something</h1>
                <h1>amazing toghtether.</h1>
              </div>
              <h1 className="description">
                Start by <a href="sd">saying hi</a>
              </h1>
            </div>
            <div className="info">
              <div>
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
