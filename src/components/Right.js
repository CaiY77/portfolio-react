import React, { Component } from 'react';
import exlink from '../icons/link.png'
import github from '../icons/github.png'

class Right extends Component {

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
                <img className = 'work-img-right' alt="project screenshot"src={img} />
                <a className = 'shade-right' href={link} target="_blank" rel="noopener noreferrer"> </a>
                <div className = 'contain-right'>

                    <a className = 'work-title' href={link} target="_blank" rel="noopener noreferrer">{title}</a>
                    <div className='work-des'>{des}</div>
                    <div className='work-links'>
                        <a href={git} target="_blank" rel="noopener noreferrer"><img className="work-icon" alt="github" src={github} /></a>
                        <a href={link} target="_blank" rel="noopener noreferrer"><img className="work-icon" alt="external link" src={exlink} /></a>
                    </div>
                    <div className="work-tech-right">
                        {this.renderTech()}
                    </div>
                </div>  
            </div>
         );
    }
}
 
export default Right;