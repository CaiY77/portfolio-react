import React, { Component } from 'react'
import {Icon} from 'semantic-ui-react'

class SideNav extends Component {

  render() {
    return (
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
    );
  }

}

export default SideNav;
