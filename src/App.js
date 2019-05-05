import React, {Component} from 'react';
import './App.css';
import {Icon,Modal,Card} from 'semantic-ui-react'

class App extends Component {

  componentDidMount() {
    document.title = 'Cai Yang | Software Engineer';
  }

  render() {
    return (<div className="main-contain">
      <nav class="ui stackable borderless menu huge">
        <h1 class="item header my-name">
          CY
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
        <a href="#" rel="noopener noreferrer" target="_blank" class="item">
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
      <main className="testing">
        <section id="about">
          <h1 id="about-n">Cai H. Yang</h1>
          <h2 id="about-h"> Software Engineer | Full-Stack Developer </h2>
          <br/>
          <p id="about-p"> I enjoy building applications from the ground-up
            <br/> as well as using logical deduction with algorithmic
            <br/>approaches to solve problems/puzzles and technical issues.
          </p>
        </section>
        <section id="experience">
          <p></p>
        </section>
        <section id="works">
          <Card.Group itemsPerRow={3}>
            <Card>
              <Icon name="folder open outline" size="huge"/>
            </Card>
            <Card>
              <Icon name="folder open outline" size="huge"/>
            </Card>
            <Card>
              <Icon name="folder open outline" size="huge"/>
            </Card>
            <Card>
              <Icon name="folder open outline" size="huge"/>
            </Card>
            <Card>
              <Icon name="folder open outline" size="huge"/>
            </Card>
            <Card>
              <Icon name="folder open outline" size="huge"/>
            </Card>
          </Card.Group>
          </section>
        <section id="contact"></section>
      </main>

    </div>);
  }
}

export default App;
