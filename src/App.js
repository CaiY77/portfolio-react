import React, {Component} from 'react';
import './App.css';
import Works from './components/Works'
import About from './components/About'
import Experience from './components/Experience'
import {Icon, Button} from 'semantic-ui-react'

class App extends Component {

  componentDidMount() {
    document.title = 'Cai Yang | Software Engineer';
  }

  render() {
    return (<div className="main-contain">
      <nav class="ui stackable borderless menu huge inverted custom">
        <a href="#top" class="item header">
          <h1 className="my-name">CY</h1>
        </a>
        <div class="right menu">
          <a href="#about" class="item nav-item">
            ABOUT
          </a>
          <a href="#experience" class="item nav-item">
            EXPERIENCE
          </a>
          <a href="#works" class="item nav-item">
            WORKS
          </a>
          <a href="#contact" class="item nav-item">
            CONTACT
          </a>
        </div>
      </nav>

      <div class="ui vertical labeled icon menu vert">
        <a href="https://docdro.id/3TkMsnb" rel="noopener noreferrer" target="_blank" class="item">
          <Icon size="small" name="file alternate"/>
          Resume
        </a>
        <a href="https://www.linkedin.com/in/caihyang/" rel="noopener noreferrer" target="_blank" class="item">
          <Icon size="small" name="linkedin"/>
          Linkedin
        </a>
        <a href="https://github.com/CaiY77" rel="noopener noreferrer" target="_blank" class="item">
          <Icon size="small" name="github"/>
          GitHub
        </a>
      </div>

      <main>
        <About />
        <Experience />
        <Works />

        <section id="contact">
          <div className='shade-c'>
            <h1 className ="headers">{ "<" } <span className="red">Contact Me</span> {"/>"}</h1>
            <p id="contactInfo">Enjoy my works? Fill free to contact me.
              I am open to all kinds of free-lancing work.
            Currently looking for  full-time positions as a Software Engineer or Full-Stack Web Developement. </p>
            <a href="mailTo:caih.yang@gmail.com" target="_blank" rel="noopener noreferrer"><Button inverted color='blue'>
              <p className="email">Contact Me!</p>
            </Button></a>
          </div>
        </section>

      </main>
      <footer></footer>
    </div>);
  }
}

export default App;
