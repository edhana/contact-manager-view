import React, { Component } from 'react';
import Navbar from './Components/Navbar.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <section className="App">
        {/* Navigation */}
        <Navbar />
      </section>
    );
  }
}

export default App;
