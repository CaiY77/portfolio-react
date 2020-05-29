import React, { Component } from 'react';
import '../App.css';
import {Button} from 'semantic-ui-react'
import Fade from 'react-reveal/Fade';

class About extends Component {

  render() {
    return (
      <section id="about">
        
          <Fade bottom>
            <h1 id="about-n">Cai H. Yang</h1>
            <h2 id="about-h"> Software Engineer | Full-Stack Engineer </h2>
            <br/>
            <p id="about-p"> I enjoy building applications from the ground-up
              <br/> as well as using logical deduction with algorithmic
              <br/>approaches to solve problems/puzzles and technical issues.
            </p>
            <a href="mailTo:caih.yang@gmail.com" target="_blank" rel="noopener noreferrer"><Button inverted color='blue'>
              <p className="email">Say Hello!</p>
            </Button></a>
          </Fade>
        
      </section>
    );
  }

}

export default About;
