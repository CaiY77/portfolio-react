import React, { Component } from 'react';
import exlink from '../icons/link.png'
import github from '../icons/github.png'
import Fade from 'react-reveal/Fade';

class Left extends Component {

    constructor(props) {
        super(props);
        this.state = {

         }
    }

    renderTech = () => {
        const { tech } = this.props;

        let arr = tech.map(each =>{
            return <p className="each">{each}</p>
        })

        return arr;
    }

    render() {
        const {img , des , link ,git , title} = this.props;

        return (
            <div className='work-contain'>
              <Fade left>
                <img className = 'work-img-left' alt="project screenshot"src={img} />
                <a className = 'shade-left' href={link} target="_blank" rel="noopener noreferrer"> </a>
                <div className = 'contain-left'>

                  <a className = 'work-title' href={link} target="_blank" rel="noopener noreferrer">{title}</a>
                  <div className='work-des'>{des}</div>
                  <div className='work-links'>
                    <a href={git} target="_blank" rel="noopener noreferrer"><img className="work-icon" alt="github" src={github} /></a>
                    <a href={link} target="_blank" rel="noopener noreferrer"><img className="work-icon" alt="external link" src={exlink} /></a>
                  </div>
                  <div className="work-tech-left">
                    {this.renderTech()}
                  </div>
                </div>
              </Fade>  
            </div>
         );
    }
}

export default Left;
