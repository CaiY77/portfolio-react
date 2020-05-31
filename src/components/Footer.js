import React, { Component } from 'react';
import {Button} from 'semantic-ui-react'

class Footer extends Component {

  render() {
    return (
      <div className='footer'>

        <p className="copy"> © 2020 Cai Yang</p>
        <div className='footer-icons'>
          <a href="https://www.docdroid.net/xqnHf2p/resume-pdf" rel="noopener noreferrer" target="_blank"><Button className="footer-but" icon="file alternate"></Button></a>
          <a href="https://www.linkedin.com/in/caihyang/" rel="noopener noreferrer" target="_blank"><Button className="footer-but" icon="linkedin"></Button></a>
          <a href="https://github.com/CaiY77" rel="noopener noreferrer" target="_blank"><Button className="footer-but" icon="github"></Button></a>
            
        </div>
        
      </div>
    );
  }

}

export default Footer;
