import React, { Component } from 'react';
import Navbar from './Components/Navbar.js';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './Components/Home.js';
import Price from './Components/Price.js';
import AddContactForm from './Components/AddContactForm.js';

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      token: null
    };
  }

  loadContactForm(token) {

    // retrieve token cookie
    if(!token) {
      this.setState({
        token: token
      });
    }
  }

  render() {
    return (
      <Router>
        <section className="App">
          <Navbar />

          <div className="container">
            <Route path="/home" component={Home} />
            <Route path="/price" component={Price} />
            <Route path="/addcontact" component={AddContactForm} />
          </div>
        </section>
      </Router>
    );
  }
}

export default App;
