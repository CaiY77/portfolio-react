import React, { Component } from 'react';
import '../App.css';
import {List,Icon} from 'semantic-ui-react'
import Fade from 'react-reveal/Fade';

class Experience extends Component {

  render() {
    return (
      <section id="experience">
        <div className="exp-shade">
          <div className="experience-left">
            <div className="profile-pic"></div>
            <Fade bottom duration={1000}>
              <h1 className="who">Get To Know Me!</h1>
              <p className ="soft-descrip">
              I have a strong passion for computer science and a huge fan of mathematics. My hobbies include powerlifting and learning new things.</p>
              <p className="quote">" Knowledge is Power. "</p>
            </Fade>
          </div>
          <div className="experience-right">
            <h1 className ="headers exper-style">{ "<" } <span className="red">Languages && Frameworks</span> {"/>"}</h1>
            <div className="my-list">

              <ul className="l-list">
                <Fade bottom duration={1000}><li className="list-style"><Icon name="js" /> Javascript / JS6</li></Fade>
                <Fade bottom duration={1300}><li className="list-style"><Icon name="react" /> React</li></Fade>
                <Fade bottom duration={1600}><li className="list-style"><Icon name="gem" /> Ruby / Rails</li></Fade>
                <Fade bottom duration={1900}><li className="list-style"><Icon name="html5" /> HTML / CSS</li></Fade>
                <Fade bottom duration={2200}><li className="list-style"><Icon name="node js" /> Node.js</li></Fade>
                <Fade bottom duration={2500}><li className="list-style"><Icon name="coffee" />  Java</li></Fade>
                <Fade bottom duration={2800}><li className="list-style"><Icon name="python" /> Python</li></Fade>
              </ul>

              <ul className="l-list">
                <Fade bottom duration={1000}><li className="list-style"><Icon name="right triangle" /> Socket.io</li></Fade>
                <Fade bottom duration={1300}><li className="list-style"><Icon name="right triangle"/> C++</li></Fade>
                <Fade bottom duration={1600}><li className="list-style"><Icon name="right triangle" /> Express.js</li></Fade>
                <Fade bottom duration={1900}><li className="list-style"><Icon name="right triangle" /> Sequelize</li></Fade>
                <Fade bottom duration={2200}><li className="list-style"><Icon name="right triangle" /> Axios</li></Fade>
                <Fade bottom duration={2500}><li className="list-style"><Icon name="right triangle" /> PostgreSQL</li></Fade>
                <Fade bottom duration={2800}><li className="list-style"><Icon name="right triangle" /> Semantic-Ui</li></Fade>
              </ul>

            </div>
          </div>
        </div>
      </section>
    );
  }

}

export default Experience;
