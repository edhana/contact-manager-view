import React, { Component } from 'react';
import Navbar from './Components/Navbar.js';
import AddContact from './Components/AddContact.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <section className="App">
        <Navbar />

        <AddContact />
      </section>
    );
  }
}

export default App;
