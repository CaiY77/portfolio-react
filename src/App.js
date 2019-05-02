import React from 'react';
import './App.css';
import {Icon} from 'semantic-ui-react'

function App() {
  return (
    <div>
      <nav class="ui stackable borderless menu huge">
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

      <div class="ui vertical labeled icon menu vert">
        <a href="https://www.linkedin.com/in/caihyang/" rel="noopener noreferrer" target="_blank" class="item">
          <Icon size="small" name="linkedin" />
          Linkedin
        </a>
        <a href="https://github.com/CaiY77" rel="noopener noreferrer" target="_blank" class="item">
          <Icon size="small" name="github" />
          GitHub
        </a>
      </div>
      <main className="testing">
        <section className = "about">

        </section>
        <section className = "experience">

        </section>
        <section className = "works">

        </section>
        <section className = "contact">

        </section>
      </main>

    </div>
  );
}

export default App;
