import React, { Component } from 'react';
import '../App.css';
import {List,Icon} from 'semantic-ui-react'

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

              <List animated className="l-list">
                <List.Item className="list-style"><List.Icon name="js" /> Javascript / JS6</List.Item>
                <List.Item className="list-style"><List.Icon name="react" /> React</List.Item>
                <List.Item className="list-style"><List.Icon name="gem" /> Ruby / Rails</List.Item>
                <List.Item className="list-style"><List.Icon name="html5" /> HTML / CSS</List.Item>
                <List.Item className="list-style"><List.Icon name="node js" /> Node.js</List.Item>
                <List.Item className="list-style"><List.Icon name="coffee" />  Java</List.Item>
                <List.Item className="list-style"><List.Icon name="python" /> Python</List.Item>
              </List>
              <List animated className="l-list">
                <List.Item className="list-style"><List.Icon name="github" /> Git / Github</List.Item>
                <List.Item className="list-style"><Icon name="right triangle"/> C++</List.Item>
                <List.Item className="list-style"><Icon name="right triangle" /> Express.js</List.Item>
                <List.Item className="list-style"><Icon name="right triangle" /> Sequelize</List.Item>
                <List.Item className="list-style"><Icon name="right triangle" /> Axios</List.Item>
                <List.Item className="list-style"><Icon name="right triangle" /> PostgreSQL</List.Item>
                <List.Item className="list-style"><Icon name="right triangle" /> Semantic-Ui</List.Item>
              </List>
            </div>
          </div>
        </div>
      </section>
    );
  }

}

export default Experience;
