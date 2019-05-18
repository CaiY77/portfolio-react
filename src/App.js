import React, {Component} from 'react';
import './App.css';
import aniManage from './images/ani-manage';
import arcade from './images/arcade.png';
import league from './images/league.png';
import calc from './images/calc.png';
import tic from './images/tic.png';
import track from './images/track.png';
import {Icon,Card,List,Button,Reveal,Modal} from 'semantic-ui-react'
import ModalCard from './components/ModalCard'

class App extends Component {

  componentDidMount() {
    document.title = 'Cai Yang | Software Engineer';
  }

  render() {
    return (<div className="main-contain">
      <nav class="ui stackable borderless menu huge inverted custom">
        <a href="#top" class="item header">
          <h1 className="my-name">CY</h1>
        </a>
        <div class="right menu">
          <a href="#about" class="item nav-item">
            ABOUT
          </a>
          <a href="#experience" class="item nav-item">
            EXPERIENCE
          </a>
          <a href="#works" class="item nav-item">
            WORKS
          </a>
          <a href="#contact" class="item nav-item">
            CONTACT
          </a>
        </div>
      </nav>

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

      <main>
        <section id="about">
          <div className= "shade">
            <h1 id="about-n">Cai H. Yang</h1>
            <h2 id="about-h"> Software Engineer | Full-Stack Developer </h2>
            <br/>
            <p id="about-p"> I enjoy building applications from the ground-up
              <br/> as well as using logical deduction with algorithmic
              <br/>approaches to solve problems/puzzles and technical issues.
            </p>
            <a href="mailTo:caih.yang@gmail.com" target="_blank" rel="noopener noreferrer"><Button inverted color='blue'>
              <p className="email">Say Hello!</p>
            </Button></a>
          </div>
        </section>

        <section id="experience">

          <h1 className ="headers-b">{ "<" } <span className="red">Languages</span> {"/>"} && { "<" } <span className="red">Frameworks</span> {"/>"}</h1>
          <div className="my-list">
            <List animated className="l-list">
              <List.Item className="list-style"><Icon name="right triangle" />Javascript / JS6</List.Item>
              <List.Item className="list-style"><Icon name="right triangle" />PostgreSQL</List.Item>
              <List.Item className="list-style"><Icon name="right triangle" />C++</List.Item>
              <List.Item className="list-style"><Icon name="right triangle" />Java</List.Item>
              <List.Item className="list-style"><Icon name="right triangle" />Python</List.Item>
            </List>
            <List animated className="l-list">
              <List.Item className="list-style"><Icon name="right triangle" />Axios</List.Item>
              <List.Item className="list-style"><Icon name="right triangle" />Ruby on Rails</List.Item>
              <List.Item className="list-style"><Icon name="right triangle" />Git / Github</List.Item>
              <List.Item className="list-style"><Icon name="right triangle" />HTML / CSS</List.Item>
            </List>

            <List animated className="l-list">
              <List.Item className="list-style"><Icon name="right triangle" />Semantic-Ui</List.Item>
              <List.Item className="list-style"><Icon name="right triangle" />Sequelize</List.Item>
              <List.Item className="list-style"><Icon name="right triangle" />Express.js</List.Item>
              <List.Item className="list-style"><Icon name="right triangle" />Node.js</List.Item>
            </List>
          </div>

        </section>

        <section id="works">
          <div className="shade-w">
            <h1 className ="headers">{ "<" } <span className="red">My Works</span> {"/>"}</h1>

            <Card.Group stackable itemsPerRow={3}>

              <Card className="all-my-cards">
                <Card.Content>
                  <div className="gitLinks">
                    <a href="https://github.com/CaiY77/track-fit" target="_blank" rel="noopener noreferrer"><Icon color="black" size='big' name="github"></Icon></a>
                    <a href="http://track-fitness.surge.sh/" target="_blank" rel="noopener noreferrer"><Icon color="black" size='big' name="globe"></Icon></a>
                  </div>
                  <Card.Header className="cardTitles">Track-Fitness</Card.Header>

                  <ModalCard descrip="Track-Fit is a sull-stack React application that runs Sequelize, PostgreSQL and Express based back end. It contains
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

              <Card className="all-my-cards">
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

              <Card className="all-my-cards">
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

              <Card className="all-my-cards">
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

              <Card className="all-my-cards">
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

              <Card className="all-my-cards">
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


        <section id="contact">
          <div className='shade-c'>
            <h1 className ="headers">{ "<" } <span className="red">Contact Me</span> {"/>"}</h1>
            <p id="contactInfo">Enjoy my works? Fill free to contact me.
              I am open to all kinds of free-lancing work.
            Currently looking for  full-time positions as a Software Engineer or Full-Stack Web Developement. </p>
            <a href="mailTo:caih.yang@gmail.com" target="_blank" rel="noopener noreferrer"><Button inverted color='blue'>
              <p className="email">Contact Me!</p>
            </Button></a>
          </div>
        </section>

      </main>
      <footer></footer>
    </div>);
  }
}

export default App;
