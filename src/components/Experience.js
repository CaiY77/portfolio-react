import React, { Component } from 'react';
import Flip from 'react-reveal/Flip';
import '../App.css';
import Fade from 'react-reveal/Fade';
import cpp from '../images/skill/cpp.png'
import css from '../images/skill/css.png'
import html from '../images/skill/html.png'
import java from '../images/skill/java.png'
import js from '../images/skill/javascript.png'
import magento from '../images/skill/magento.png'
import node from '../images/skill/nodejs.png'
import post from '../images/skill/postgresql.png'
import python from '../images/skill/python.png'
import react from '../images/skill/react.png'
import wp from '../images/skill/wordpress.png'
import api from '../images/skill/api.png'


class Experience extends Component {

  render() {
    return (
      <section id="experience">
        
          <div className="experience-left">
            <div className="profile-pic"></div>
            <Fade bottom duration={1200}>
              <h1 className="who">Get To Know Me!</h1>
              <p className ="soft-descrip">
                I have a strong passion for computer science and a love for mathematics. I find excitement and enjoyment when expanding my knowledge in tech. My long time goal is to expose myself to as much technology as possible.
              My hobbies include powerlifting and learning new things.</p>
              <p className="quote">" Knowledge is Power. "</p>
            </Fade>
          </div>
          <div className="experience-right">
            <h1 className ="headers exper-style">{ "<" } <span className="red"> Experience </span> {"/>"}</h1>
            <div className="skill-contain">
              <Flip top>
                <img alt="Javascript" src={js} className='language'/>
                <img alt="React.js" src={react} className='language'/>
                <img alt="API" src={api} className='language'/>
                <img alt="Node.js" src={node} className='language'/>
                <img alt="PostgreSQL" src={post} className='language'/>
                <img alt="Python" src={python} className='language'/>
                <img alt="Java" src={java} className='language'/>
                <img alt="C++" src={cpp} className='language'/>
                <img alt="HTML" src={html} className='language'/>
                <img alt="CSS" src={css} className='language'/>
                <img alt="Magento" src={magento} className='language'/>
                <img alt="Wordpress" src={wp} className='language'/>
              </Flip>
            </div>
          </div>
        
      </section>
    );
  }

}

export default Experience;