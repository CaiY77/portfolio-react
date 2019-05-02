import React, {Component} from 'react';
import './App.css';
import {Icon} from 'semantic-ui-react'

class App extends Component {

  componentDidMount() {
    document.title = 'Cai Yang | Software Engineer';
  }

  render() {
    return (<div>
      <nav class="ui stackable borderless menu huge">
        <h1 class="item header my-name">
          CAI H. YANG
        </h1>
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
        <a href="https://www.linkedin.com/in/caihyang/" rel="noopener noreferrer" target="_blank" class="item">
          <Icon size="small" name="linkedin"/>
          Linkedin
        </a>
        <a href="https://github.com/CaiY77" rel="noopener noreferrer" target="_blank" class="item">
          <Icon size="small" name="github"/>
          GitHub
        </a>
      </div>
      <main className="testing">
        <section id="about">
          <h1>Cai H. Yang</h1>
          <h2> Software Engineer | Full-Stack Developer </h2>
          <p> I enjoy building applications from the ground-up
            <br/> as well as using logical deduction with algorithmic
            <br/>approaches to solve problems/puzzles and technical issues.
          </p>
        </section>
        <section id="experience"></section>
        <section id="works"></section>
        <section id="contact"></section>
      </main>

    </div>);
  }
}

export default App;
