import React, { Component } from 'react';
import aniManage from '../images/ani-manage';
import arcade from '../images/arcade.png';
import league from '../images/league.png';
import track from '../images/track.png';
import doodle from '../images/doodle.png';
import ttp from '../images/ttp.png';
import Right from './Right.js'
import Left from './Left.js'
import { Button } from 'semantic-ui-react'

class Works extends Component {

  render() {
    return (
      <section id="works">
          <h1 className ="headers">{ "<" } <span className="red">My Works</span> {"/>"}</h1>

          <Left 
            img={track} 
            des="Track-Fit is a full-stack React application that runs Sequelize, PostgreSQL and Express based back end. It contains
            authentication which allows the creation of unique users. The app provides a quick and easy way to track & log food/exercise entries." 
            link="http://track-fitness.surge.sh/"
            title= "TRACK-FITNESS"
            git="https://github.com/CaiY77/track-fit"
            tech={["React","Express","PostgreSQL","Heroku","Sequelize"]}
          />
          <Right 
            img={doodle} 
            des="Doodle Arcade is a full-stack React application that runs Socket.io on an Expres server that allows the application to be used simultaneously on different devices.
                  It also allows the creation of multiple rooms with gives the options to host multiple games at once." 
            link="http://doodle-arcade.surge.sh/"
            title= "DOODLE ARCADE"
            git="https://github.com/CaiY77/arcade-2.0"
            tech={["React","Express","Socket.io","React-Router","Semantic-Ui"]}
          />
          <Left 
            img={ttp} 
            des="This stock application imitates the buying of real stocks at real time prices using the IEX Cloud API. The purchased stocks are stored in portfolio along with a transaction page. This is a fully responsive application
                  that also emphisizes on user experience with proper success/error messages." 
            link="http://cai-ttp.surge.sh/"
            title= "TTP STOCKS"
            git="https://github.com/CaiY77/ttp_stage_2"
            tech={["React","Express","IEX API","React-Router","Semantic-Ui"]}
          />
          <Right 
            img={aniManage} 
            des="An animation search engine built on React.js that uses data pulled from Jikan's API. Managing states in a way that allows users to bookmark favorites as well as the integration of local storage
                  to store bookmark data. Deployed with Heroku." 
            link="http://ani-manage.surge.sh/"
            title= "ANI-MANAGE"
            git="https://github.com/CaiY77/ani-manage"
            tech={["React","API","Heroku","Axios","Semantic", "React-Router"]}
          />
          <Left 
            img={arcade} 
            des="A fully functional web based arcade filled with games based of remakes of the classics or creation on the spot.
            Uses HTML/CSS and a lot OOP Javascript." 
            link="https://cai-arcade.netlify.com/"
            title= "WEB ARCADE"
            git="https://github.com/CaiY77/My-Arcade"
            tech={["JS/JS6","HTML","CSS","Object-Oriented-Programming"]}
          />
          <Right 
            img={league} 
            des="Blog like webpage to show mastery in HTML, CSS and Javascript. Implemented best practices in the Web Developement field." 
            link="https://my-league-picks.netlify.com/"
            title= "LEAGUE PICKS"
            git="https://github.com/CaiY77/PS_Final"
            tech={["JS/JS6","HTML","CSS", "JQuery"]}
          />
       
       
        <div className="see-more">
        <a href="https://github.com/CaiY77" target="_blank" rel="noopener noreferrer"><Button inverted color='blue'>
              <p className="email">See More!</p>
            </Button></a>
        </div>
      </section>
    );
  }

}

export default Works;
