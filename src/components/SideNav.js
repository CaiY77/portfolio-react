import React, { Component } from 'react'
import {Button} from 'semantic-ui-react'

class SideNav extends Component {

  constructor(props){
    super(props);

    this.state=({
      isOpen: false
    })
  }

  toggleOption = () => {
    let element = document.getElementById('etc')
    element.classList.toggle('show')
    
    this.setState({
      isOpen: !this.state.isOpen
    })
    
    
  }

  render() {
    const {isOpen} = this.state

    return (<div>
      {
        (isOpen)
        ?<Button className="button-menu op-but-open" icon='close' onClick={()=>this.toggleOption()}></Button>
        :<Button className="button-menu op-but" icon='options' onClick={()=>this.toggleOption()} ></Button>
      }
     <div id="etc" className="hide">
        <a href="https://www.docdroid.net/xqnHf2p/resume-pdf" rel="noopener noreferrer" target="_blank"><Button className="button-menu res-but" icon="file alternate"></Button></a>
        <a href="https://www.linkedin.com/in/caihyang/" rel="noopener noreferrer" target="_blank"><Button className="button-menu link-but" icon="linkedin"></Button></a>
        <a href="https://github.com/CaiY77" rel="noopener noreferrer" target="_blank"><Button className="button-menu git-but" icon="github"></Button></a>
      </div>

    </div>);
  }

}

export default SideNav;