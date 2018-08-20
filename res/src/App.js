import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import Menu from './Menu';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="App-header"/>
        <Nav />
        <Menu />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
