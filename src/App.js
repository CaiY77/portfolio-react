import React from 'react';
import './App.css';
import {Icon,Button} from 'semantic-ui-react'

function App() {
  return (
    <div>
      <nav class="ui menu huge">
        <h1 class="item header">
          Cai H. Yang
        </h1>
        <div class="right menu">
          <a href="#" class="item">
            ABOUT
          </a>
          <a href="#" class="item">
            EXPERIENCE
          </a>
          <a href="#" class="item">
            WORKS
          </a>
          <a href="#" class="item">
            CONTACT
          </a>
        </div>
      </nav>

      <div class="ui vertical labeled icon menu">
        <a href="https://www.linkedin.com/in/caihyang/" rel="noopener noreferrer" target="_blank" class="item">
          <Icon size="small" name="linkedin" />
          Linkedin
        </a>
        <a href="https://github.com/CaiY77" rel="noopener noreferrer" target="_blank" class="item">
          <Icon size="small" name="github" />
          GitHub
        </a>
      </div>

    </div>
  );
}

export default App;
