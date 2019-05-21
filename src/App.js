import React, {Component} from 'react';
import './App.css';
import Works from './components/Works'
import About from './components/About'
import Experience from './components/Experience'
import Contact from './components/Contact'
import NavBar from './components/NavBar'
import {Icon, Button} from 'semantic-ui-react'

class App extends Component {

  componentDidMount() {
    document.title = 'Cai Yang | Software Engineer';
  }

  render() {
    return (<div className="main-contain">
      <NavBar />
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
        <Contact />

      </main>

      <footer></footer>
    </div>);
  }
}

export default App;
