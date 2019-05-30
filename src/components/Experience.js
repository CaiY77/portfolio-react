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
            <h1 className="who">Get To Know Me!</h1>
            <p className ="soft-descrip">
            I have a strong passion for computer science and a huge fan of mathematics. My hobbies include powerlifting and learning new things.</p>
            <p className="quote">" Knowledge is Power. "</p>

          </div>
          <div className="experience-right">
            <h1 className ="headers exper-style">{ "<" } <span className="red">Languages && Frameworks</span> {"/>"}</h1>
            <div className="my-list">

              <ul className="l-list">
                <li className="list-style"><List.Icon name="js" /> Javascript / JS6</li>
                <li className="list-style"><List.Icon name="react" /> React</li>
                <li className="list-style"><List.Icon name="gem" /> Ruby / Rails</li>
                <li className="list-style"><List.Icon name="html5" /> HTML / CSS</li>
                <li className="list-style"><List.Icon name="node js" /> Node.js</li>
                <li className="list-style"><List.Icon name="coffee" />  Java</li>
                <li className="list-style"><List.Icon name="python" /> Python</li>
              </ul>

              <ul className="l-list">
                <li className="list-style"><List.Icon name="github" /> Git / Github</li>
                <li className="list-style"><Icon name="right triangle"/> C++</li>
                <li className="list-style"><Icon name="right triangle" /> Express.js</li>
                <li className="list-style"><Icon name="right triangle" /> Sequelize</li>
                <li className="list-style"><Icon name="right triangle" /> Axios</li>
                <li className="list-style"><Icon name="right triangle" /> PostgreSQL</li>
                <li className="list-style"><Icon name="right triangle" /> Semantic-Ui</li>
              </ul>

            </div>
          </div>
        </div>
      </section>
    );
  }

}

export default Experience;
