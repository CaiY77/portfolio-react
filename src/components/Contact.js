import React, { Component } from 'react';
import {Button} from 'semantic-ui-react'
import Fade from 'react-reveal/Fade';


class Contact extends Component {

  render() {
    return (
      <section id="contact">
        <div className='shade-c'>
          <Fade bottom>
            <h1 className ="headers">{ "<" } <span className="red">Contact Me</span> {"/>"}</h1>
            <p id="contactInfo">Enjoy my works? Feel free to contact me.
              I am open to all kinds of free-lancing work.
            Currently looking for full-time positions as a Software Engineer or Full-Stack Web Developement. </p>
            <a href="mailTo:caih.yang@gmail.com" target="_blank" rel="noopener noreferrer"><Button inverted color='blue'>
              <p className="email">Contact Me!</p>
            </Button></a>
          </Fade>
        </div>
      </section>
    );
  }

}

export default Contact;
