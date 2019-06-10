import React, { Component } from 'react';

class NavBar extends Component {

  render() {
    return (
      <nav className="ui stackable borderless menu huge inverted custom">
        <a href="#top" className="item header">
          <h1 className="my-name">CY</h1>
        </a>
        <div class="right menu r-m">
          <a href="#about" className="item nav-item">
            ABOUT
          </a>
          <a href="#experience" className="item nav-item">
            EXPERIENCE
          </a>
          <a href="#works" className="item nav-item">
            WORKS
          </a>
          <a href="#contact" className="item nav-item">
            CONTACT
          </a>
        </div>
      </nav>
    );
  }

}

export default NavBar;
