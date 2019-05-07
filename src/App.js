import React, {Component} from 'react';
import './App.css';
import {Icon,Card,List,Button} from 'semantic-ui-react'
class App extends Component {

  componentDidMount() {
    document.title = 'Cai Yang | Software Engineer';
  }

  render() {
    return (<div className="main-contain">
      <nav class="ui stackable borderless menu huge">
        <h1 class="item header my-name">
          CY
        </h1>
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
        <a href="https://docdro.id/3YVUHpu" rel="noopener noreferrer" target="_blank" class="item">
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
          <h1 id="about-n">Cai H. Yang</h1>
          <h2 id="about-h"> Software Engineer | Full-Stack Developer </h2>
          <br/>
          <p id="about-p"> I enjoy building applications from the ground-up
            <br/> as well as using logical deduction with algorithmic
            <br/>approaches to solve problems/puzzles and technical issues.
          </p>
          <a href="mailTo:caih.yang@gmail.com" target="_blank" rel="noopener noreferrer"><Button inverted color='blue'>
            <p className="email">Contact Me!</p>
          </Button></a>
        </section>

        <section id="experience">
          <p></p>
        </section>

        <section id="works">

          <h1 className ="headers">{ "<" } <span className="red">My Works</span> {"/>"}</h1>

          <Card.Group stackable itemsPerRow={3}>

            <Card>
              <Card.Content>
                <div className="gitLinks">
                  <a href="https://github.com/CaiY77/ani-manage" target="_blank" rel="noopener noreferrer"><Icon color="black" size='big' name="github"></Icon></a>
                  <a href="https://ani-manage.herokuapp.com/" target="_blank" rel="noopener noreferrer"><Icon color="black" size='big' name="globe"></Icon></a>
                </div>
                <Card.Header className="cardTitles">Ani-Manage</Card.Header>
                <Card.Description className="cardDescrip">
                  An animation search engine built on React.js that uses data pulled from Jikan's API.
                  Managing states in a way that allows users to bookmark favorites as well as the integration of local storage
                  to store bookmark data. Deployed with Heroku.
                </Card.Description>
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

            <Card>
              <Card.Content>
                <div className="gitLinks">
                  <a href="https://github.com/CaiY77/My-Arcade" target="_blank" rel="noopener noreferrer"><Icon color="black" size='big' name="github"></Icon></a>
                  <a href="https://cai-arcade.netlify.com/" target="_blank" rel="noopener noreferrer"><Icon color="black" size='big' name="globe"></Icon></a>
                </div>
                <Card.Header className="cardTitles">Cai's Arcade</Card.Header>
                <Card.Description className="cardDescrip">
                  A fully functional web based arcade filled with games based of remakes of the classics or creation on the spot.
                  Uses HTML/CSS and a lot OOP Javascript.
                </Card.Description>
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

            <Card>
              <Card.Content>
                <div className="gitLinks">
                  <a href="https://github.com/CaiY77/PS_Final" target="_blank" rel="noopener noreferrer"><Icon color="black" size='big' name="github"></Icon></a>
                  <a href="https://my-league-picks.netlify.com/" target="_blank" rel="noopener noreferrer"><Icon color="black" size='big' name="globe"></Icon></a>
                </div>
                <Card.Header className="cardTitles">League-Picks</Card.Header>
                <Card.Description className="cardDescrip">
                  Blog like webpage to show mastery in HTML, CSS and Javascript. Implemented best practices in the Web Developement field.
                </Card.Description>
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

            <Card>
              <Card.Content>
                <div className="gitLinks">
                  <a href="https://github.com/CaiY77/Calculator-Proj2" target="_blank" rel="noopener noreferrer" ><Icon color="black" size='big' name="github"></Icon></a>
                  <a href="https://web-calculator.netlify.com/" target="_blank" rel="noopener noreferrer" ><Icon color="black" size='big' name="globe"></Icon></a>
                </div>
                <Card.Header className="cardTitles">Web-Calculator</Card.Header>
                <Card.Description className="cardDescrip">
                  Interactive web calculator that does all basic operations with an addition of an average feature.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <List horizontal>
                  <List.Item>Javascript/JS6</List.Item>
                  <List.Item>HTML</List.Item>
                  <List.Item>CSS</List.Item>
                </List>
              </Card.Content>
            </Card>

            <Card>
              <Card.Content>
                <div className="gitLinks">
                  <a href="https://github.com/CaiY77/tic-tac-toe" target="_blank" rel="noopener noreferrer" ><Icon color="black" size='big' name="github"></Icon></a>
                  <a href="https://tic-tac-toe-cy.netlify.com/" target="_blank" rel="noopener noreferrer" ><Icon color="black" size='big' name="globe"></Icon></a>
                </div>
                <Card.Header className="cardTitles">Tic-Tac-Toe</Card.Header>
                <Card.Description className="cardDescrip">
                  Simple game of the classic Tic-Tac-Toe using Javascript while interacting with the DOM.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <List horizontal>
                  <List.Item>Javascript/JS6</List.Item>
                  <List.Item>HTML</List.Item>
                  <List.Item>CSS</List.Item>
                </List>
              </Card.Content>
            </Card>
            <Card></Card>
          </Card.Group>
        </section>
      </main>
      <section id="contact">
        <h1 className ="headers">{ "<" } <span className="red">Contact Me</span> {"/>"}</h1>
      </section>
    </div>);
  }
}

export default App;
