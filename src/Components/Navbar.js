import React, { Component } from 'react';
import { fetchContactDataFromAPI } from './api.js';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contactToken: '',
      contact: {
        id: null,
        firstname: '',
        lastname: '',
        email: ''
      }
    }

    this.updateContactLink = this.updateContactLink.bind(this);
  }

  componentDidMount() {
    //If cookie exist, retrieve the identification (user_id) from the cookie
    //TODO: Load cookie
    //If cookie exists verify the contact identification
    // use the contact id to retrieve the rest of the user data from the server
    //If cookie does not exists set to isContactRegistered to false

    this.updateContactLink();
  }

  // change this function name for something related to retrieve the cookie and the token
  updateContactLink() {
    fetchContactDataFromAPI(10000).then(function (responseData) {
      if(responseData){
        this.setState({
          contact: responseData
        });
      }
    }.bind(this));
  }

  updateContactInfo() {
    let button = null;
    if(this.state.contact) {
      button = (
        <li className="nav-item">
          <a className="nav-link" href="/" >Logout</a>
        </li>
      );
    } else {
      button = (
        <li className="nav-item">
          <a className="nav-link" href="/add_contact.html">Contact</a>
        </li>
      );
    }
    return button;
  }

  render() {
    let fullName = null;

    if(this.state.contact.id != null) {
      fullName = "(" + this.state.contact.firstname + " " + this.state.contact.lastname + ")";
    }

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="/">Contact Express <small>{fullName}</small></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Services</a>
            </li>
            {this.updateContactInfo}
          </ul>
        </div>
      </nav>

    );
  }
}

export default Navbar;
