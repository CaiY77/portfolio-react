import React, { Component } from 'react';
import {Button} from 'semantic-ui-react'
import Fade from 'react-reveal/Fade';


class Contact extends Component {

  render() {
    return (
      <section id="contact">
          
            <h1 className ="headers">{ "<" } <span className="red">Contact Me</span> {"/>"}</h1>
            <Fade bottom cascade duration={1000}>
            <p id="contactInfo"> Enjoy my works? </p>
            <p id="contactInfo"> Feel free to reach out.
              My inbox is open to all inquires, project, proposals and opportunities.</p>
          
            <a href="mailTo:caih.yang@gmail.com" target="_blank" rel="noopener noreferrer"><Button inverted color='blue'>
              <p className="email">Contact Me!</p>
            </Button></a>
          </Fade>
      
      </section>
    );
  }

}

export default Contact;
