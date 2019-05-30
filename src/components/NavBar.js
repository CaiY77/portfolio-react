import React, { Component } from 'react';

class NavBar extends Component {

  render() {
    return (
      <nav class="ui stackable borderless menu huge inverted custom">
        <a href="#top" class="item header">
          <h1 className="my-name">CY</h1>
        </a>
        <div class="right menu r-m">
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
    );
  }

}

export default NavBar;
