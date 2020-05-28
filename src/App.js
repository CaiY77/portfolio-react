import React, {Component} from 'react';
import './App.css';
import Works from './components/Works'
import About from './components/About'
import Experience from './components/Experience'
import Contact from './components/Contact'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import SideNav from './components/SideNav'

class App extends Component {

  render() {
    return (<div className="main-contain">
      <NavBar />
      <SideNav />

      <main>
        <About />
        <Experience />
        <Works />
        <Contact />
      </main>

      <Footer />
    </div>);
  }
}

export default App;
