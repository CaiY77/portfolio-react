import React, { Component } from 'react';
import '../App.css';
import {Icon} from 'semantic-ui-react'
import Fade from 'react-reveal/Fade';

class Experience extends Component {

  render() {
    return (
      <section id="experience">
        
          <div className="experience-left">
            <div className="profile-pic"></div>
            <Fade bottom cascade duration={1000}>
              <h1 className="who">Get To Know Me!</h1>
              <p className ="soft-descrip">
                I have a strong passion for computer science and a love for mathematics. I find excitement and enjoyment when expanding my knowledge in tech. My long time goal is to expose myself to as much technology as possible.
              My hobbies include powerlifting and learning new things.</p>
              <p className="quote">" Knowledge is Power. "</p>
            </Fade>
          </div>
          <div className="experience-right">
            <h1 className ="headers exper-style">{ "<" } <span className="red"> Experience </span> {"/>"}</h1>
            <div className="my-list">

              <ul className="l-list">
                <h2 className="list-header" > Proficient In </h2>
                <Fade bottom duration={1000}><li className="list-style"><Icon name="js" /> Javascript / JS6</li></Fade>
                <Fade bottom duration={1200}><li className="list-style"><Icon name="python" /> Python</li></Fade>
                <Fade bottom duration={1400}><li className="list-style"><Icon name="react" /> React </li></Fade>
                <Fade bottom duration={1600}><li className="list-style"><Icon name="right triangle" /> C++</li></Fade>
                <Fade bottom duration={1800}><li className="list-style"><Icon name="html5" /> HTML / CSS</li></Fade>
                <Fade bottom duration={2000}><li className="list-style"><Icon name="right triangle" /> Sequelize</li></Fade>
                <Fade bottom duration={2200}><li className="list-style"><Icon name="right triangle" />  Express.js</li></Fade>
                <Fade bottom duration={2400}><li className="list-style"><Icon name="right triangle" /> PostgreSQL</li></Fade>
              </ul>

              <ul className="l-list">
                <h2 className="list-header list-extra"> Experienced With </h2>
                <Fade bottom duration={1000}><li className="list-style"><Icon name="coffee"/> Java</li></Fade>
                <Fade bottom duration={1200}><li className="list-style"><Icon name="gem" /> Ruby / Rails</li></Fade>
                <Fade bottom duration={1400}><li className="list-style"><Icon name="node js" /> Node.js</li></Fade>
                <Fade bottom duration={1600}><li className="list-style"><Icon name="right triangle" /> Axios</li></Fade>
                <Fade bottom duration={1800}><li className="list-style"><Icon name="magento" /> Magento</li></Fade>
                <Fade bottom duration={2000}><li className="list-style"><Icon name="wordpress" />WordPress</li></Fade>
              </ul>

            </div>
          </div>
        
      </section>
    );
  }

}

export default Experience;
