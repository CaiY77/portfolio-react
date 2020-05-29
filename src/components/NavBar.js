import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class NavBar extends Component {

  constructor(props){
    super(props);

    this.state = {
      width: window.innerWidth,
      isOpen:false
    }

  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimentions)
  }

  updateDimentions = () => {
    this.setState({
      width: window.innerWidth
    })

    if(this.state.width > 1000){
      this.setState({
        isOpen: false
      })
    }

  }
  menuToggle = () => {
    
      let element = document.getElementById('burger');
      element.classList.toggle('change')
      this.setState({
        isOpen: !this.state.isOpen
      })

  }
  
  render() {
    const {isOpen} = this.state;

    return (<div>
        <nav className='nav'>
          {
            (this.state.width > 1000)
            ?(<div style={{"paddingRight": "40px"}}>
                <div class="nav-header">
                  <div class="nav-title">
                    CY
                  </div>
                </div>

                <div className="nav-links">
                  <a href="#about" className="nav-item custom-style">ABOUT</a>
                  <a href="#experience" className="nav-item custom-style">EXPERIENCE</a>
                  <a href="#works" className="nav-item custom-style">WORKS</a>
                  <a href="#contact" className="nav-item custom-style">CONTACT</a>
                </div>
              </div>)
            :(<div>
                <div class="nav-header">
                  <div class="nav-title">
                    CY
                  </div>
                </div>

                <div className="nav-links">
                  <div id="burger" onClick={()=>this.menuToggle()}>
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                  </div>
                </div>
              </div>)
          }
        </nav>
        
         <Fade top collapse when={isOpen} duration={1400} style={{'position':'absolute'}}>
            <div className="dropdown" style={{ display: (isOpen)?"block":"none" }}>
              <Fade top collapse when={isOpen}><div className="drop-wrap"><a href="#about" onClick={()=>this.menuToggle()} className="custom-style drop-style">ABOUT</a></div></Fade>
              <Fade top collapse when={isOpen}><div className="drop-wrap"><a href="#experience" onClick={()=>this.menuToggle()} className="custom-style drop-style">EXPERIENCE</a></div></Fade>
              <Fade top collapse when={isOpen}><div className="drop-wrap"><a href="#works" onClick={()=>this.menuToggle()} className="custom-style drop-style">WORKS</a></div></Fade>
              <Fade top collapse when={isOpen}><div className="drop-wrap"><a href="#contact" onClick={()=>this.menuToggle()} className="custom-style drop-style">CONTACT</a></div></Fade>
            </div>
          </Fade>
       
      </div>);
  }

}

export default NavBar;
