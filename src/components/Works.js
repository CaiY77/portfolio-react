import React, { Component } from 'react';
import aniManage from '../images/ani-manage';
import arcade from '../images/arcade.png';
import league from '../images/league.png';
import calc from '../images/calc.png';
import tic from '../images/tic.png';
import track from '../images/track.png';
import doodle from '../images/doodle.png';
import ModalCard from './ModalCard'
import {Icon,Card,List} from 'semantic-ui-react'


class Works extends Component {

  render() {
    return (
      <section id="works">
        <div className="shade-w">
          <h1 className ="headers">{ "<" } <span className="red">My Works</span> {"/>"}</h1>

          <Card.Group stackable itemsPerRow={3}>

            <Card color="green" className="all-my-cards">
              <Card.Content>
                <div className="gitLinks">
                  <a href="https://github.com/CaiY77/arcade-2.0" target="_blank" rel="noopener noreferrer"><Icon color="black" size='big' name="github"></Icon></a>
                  <a href="" target="_blank" rel="noopener noreferrer"><Icon color="black" size='big' name="globe"></Icon></a>
                </div>
                <Card.Header className="cardTitles">Doodle Arcade</Card.Header>

                <ModalCard descrip="comingsoon" img={doodle}/>

              </Card.Content>
              <Card.Content extra>
                <List horizontal>
                  <List.Item>React</List.Item>
                  <List.Item>Sequelize</List.Item>
                  <List.Item>PostgreSQL</List.Item>
                  <List.Item>Heroku</List.Item>
                  <List.Item>React-Router</List.Item>
                </List>
              </Card.Content>
            </Card>

            <Card color="green" className="all-my-cards">
              <Card.Content>
                <div className="gitLinks">
                  <a href="https://github.com/CaiY77/track-fit" target="_blank" rel="noopener noreferrer"><Icon color="black" size='big' name="github"></Icon></a>
                  <a href="http://track-fitness.surge.sh/" target="_blank" rel="noopener noreferrer"><Icon color="black" size='big' name="globe"></Icon></a>
                </div>
                <Card.Header className="cardTitles">Track-Fitness</Card.Header>

                <ModalCard descrip="Track-Fit is a full-stack React application that runs Sequelize, PostgreSQL and Express based back end. It contains
                  authentication which allows the creation of unique users. The app provides a quick and easy way to track & log food/exercise entries." img={track}/>

              </Card.Content>
              <Card.Content extra>
                <List horizontal>
                  <List.Item>React</List.Item>
                  <List.Item>Sequelize</List.Item>
                  <List.Item>PostgreSQL</List.Item>
                  <List.Item>Heroku</List.Item>
                  <List.Item>React-Router</List.Item>
                </List>
              </Card.Content>
            </Card>

            <Card color="green" className="all-my-cards">
              <Card.Content>
                <div className="gitLinks">
                  <a href="https://github.com/CaiY77/ani-manage" target="_blank" rel="noopener noreferrer"><Icon color="black" size='big' name="github"></Icon></a>
                  <a href="http://ani-manage.surge.sh/" target="_blank" rel="noopener noreferrer"><Icon color="black" size='big' name="globe"></Icon></a>
                </div>
                <Card.Header className="cardTitles">Ani-Manage</Card.Header>

                <ModalCard descrip="An animation search engine built on React.js that uses data pulled from Jikan's API.
                  Managing states in a way that allows users to bookmark favorites as well as the integration of local storage
                  to store bookmark data. Deployed with Heroku." img={aniManage}/>

              </Card.Content>
              <Card.Content extra>
                <List horizontal>
                  <List.Item>React</List.Item>
                  <List.Item>API</List.Item>
                  <List.Item>Axios</List.Item>
                  <List.Item>Heroku</List.Item>
                  <List.Item>React-Router</List.Item>
                  <List.Item>Semantic-Ui</List.Item>
                </List>
              </Card.Content>
            </Card>

            <Card color="green" className="all-my-cards">
              <Card.Content>
                <div className="gitLinks">
                  <a href="https://github.com/CaiY77/My-Arcade" target="_blank" rel="noopener noreferrer"><Icon color="black" size='big' name="github"></Icon></a>
                  <a href="https://cai-arcade.netlify.com/" target="_blank" rel="noopener noreferrer"><Icon color="black" size='big' name="globe"></Icon></a>
                </div>
                <Card.Header className="cardTitles">Cai's Arcade</Card.Header>

                <ModalCard descrip="A fully functional web based arcade filled with games based of remakes of the classics or creation on the spot.
                  Uses HTML/CSS and a lot OOP Javascript." img={arcade} />

              </Card.Content>
              <Card.Content extra>
                <List horizontal>
                  <List.Item>Javascript/JS6</List.Item>
                  <List.Item>CSS</List.Item>
                  <List.Item>HTML</List.Item>
                  <List.Item>OOP</List.Item>
                </List>
              </Card.Content>
            </Card>

            <Card color="green" className="all-my-cards">
              <Card.Content>
                <div className="gitLinks">
                  <a href="https://github.com/CaiY77/PS_Final" target="_blank" rel="noopener noreferrer"><Icon color="black" size='big' name="github"></Icon></a>
                  <a href="https://my-league-picks.netlify.com/" target="_blank" rel="noopener noreferrer"><Icon color="black" size='big' name="globe"></Icon></a>
                </div>
                <Card.Header className="cardTitles">League-Picks</Card.Header>
                <ModalCard descrip="Blog like webpage to show mastery in HTML, CSS and Javascript. Implemented best practices in the Web Developement field." img={league} />

              </Card.Content>
              <Card.Content extra>
                <List horizontal>
                  <List.Item>Javascript/JS6</List.Item>
                  <List.Item>HTML</List.Item>
                  <List.Item>CSS</List.Item>
                  <List.Item>JQuery</List.Item>
                </List>
              </Card.Content>
            </Card>

            <Card color="green" className="all-my-cards">
              <Card.Content>
                <div className="gitLinks">
                  <a href="https://github.com/CaiY77/Calculator-Proj2" target="_blank" rel="noopener noreferrer" ><Icon color="black" size='big' name="github"></Icon></a>
                  <a href="https://web-calculator.netlify.com/" target="_blank" rel="noopener noreferrer" ><Icon color="black" size='big' name="globe"></Icon></a>
                </div>
                <Card.Header className="cardTitles">Web-Calculator</Card.Header>

                <ModalCard descrip="Interactive web calculator that does all basic operations with an addition of an average feature." img={calc}/>

              </Card.Content>
              <Card.Content extra>
                <List horizontal>
                  <List.Item>Javascript/JS6</List.Item>
                  <List.Item>HTML</List.Item>
                  <List.Item>CSS</List.Item>
                </List>
              </Card.Content>
            </Card>

            <Card color="green" className="all-my-cards">
              <Card.Content>
                <div className="gitLinks">
                  <a href="https://github.com/CaiY77/tic-tac-toe" target="_blank" rel="noopener noreferrer" ><Icon color="black" size='big' name="github"></Icon></a>
                  <a href="https://tic-tac-toe-cy.netlify.com/" target="_blank" rel="noopener noreferrer" ><Icon color="black" size='big' name="globe"></Icon></a>
                </div>
                <Card.Header className="cardTitles">Tic-Tac-Toe</Card.Header>

                <ModalCard descrip="Simple game of the classic Tic-Tac-Toe using Javascript while interacting with the DOM." img={tic}/>

              </Card.Content>
              <Card.Content extra>
                <List horizontal>
                  <List.Item>Javascript/JS6</List.Item>
                  <List.Item>HTML</List.Item>
                  <List.Item>CSS</List.Item>
                </List>
              </Card.Content>
            </Card>

          </Card.Group>
        </div>
      </section>
    );
  }

}

export default Works;
