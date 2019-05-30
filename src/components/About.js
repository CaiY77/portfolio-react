import React, { Component } from 'react';
import '../App.css';
import {Button} from 'semantic-ui-react'
import Reveal from 'react-reveal/Reveal';

class About extends Component {

  render() {
    return (
      <section id="about">
        <div className= "shade">
          <Reveal effect="fadeInUp">
            <h1 id="about-n">Cai H. Yang</h1>
            <h2 id="about-h"> Software Engineer | Full-Stack Developer </h2>
            <br/>
            <p id="about-p"> I enjoy building applications from the ground-up
              <br/> as well as using logical deduction with algorithmic
              <br/>approaches to solve problems/puzzles and technical issues.
            </p>
            <a href="mailTo:caih.yang@gmail.com" target="_blank" rel="noopener noreferrer"><Button inverted color='blue'>
              <p className="email">Say Hello!</p>
            </Button></a>
          </Reveal>
        </div>
      </section>
    );
  }

}

export default About;
