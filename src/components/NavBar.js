import React, { Component } from 'react';

class NavBar extends Component {

  render() {
    return (
      <nav class="ui stackable borderless menu huge inverted custom">
        <a href="#top" class="item header">
          <h1 className="my-name">CY</h1>
        </a>
        <div class="right menu">
          <a href="#about" class="item nav-item">
            ABOUT
          </a>
          <a href="#experience" class="item nav-item r-m">
            EXPERIENCE
          </a>
          <a href="#works" class="item nav-item r-m">
            WORKS
          </a>
          <a href="#contact" class="item nav-item r-m">
            CONTACT
          </a>
        </div>
      </nav>
    );
  }

}

export default NavBar;
