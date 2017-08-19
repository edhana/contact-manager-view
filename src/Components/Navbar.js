import React, { Component } from 'react';
import axios from 'axios';


function fetchContactDataFromAPI() {
  const baseURL = 'http://localhost:8080/api/v1/contacts';
  let encodeURI =  window.encodeURI(baseURL);
  return axios.post(encodeURI, {
    contact: {
      firstname: 'Eduardo',
      lastname: 'Marques',
      email: 'eduardomarques@teste.com'
    }
  }).then(function(response) {
    return response.data.data;
  });
}

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isContactRegistered: false,
      contact: {
        id: null,
        firstname: '',
        lastname: '',
        email: ''
      }
    }
  }

  componentWillMount() {
    //If cookie exist, retrieve the identification (user_id) from the cookie
    //TODO: Load cookie
    //If cookie exists verify the contact identification
    // use the contact id to retrieve the rest of the user data from the server
    //If cookie does not exists set to isContactRegistered to false

    fetchContactDataFromAPI()
      .then(function(contact){
        console.log(contact);
      });

    this.setState({isContactRegistered: true,
      contact: {
        id: 1,
        firstname: 'Eduardo',
        lastname: 'Marques',
        email: 'eduardomarques@teste.com'
      }});
  }

  handleLogout() {
    /* this.seState({contact: null});*/
  }

  render() {
    let button = null;

    if(this.state.isContactRegistered) {
      button = (
        <li className="nav-item">
          <a className="nav-link" href="/" onClick={this.handleLogout}>Logout</a>
        </li>
      );
    } else {
      button = (
        <li className="nav-item">
          <a className="nav-link" href="/add_contact.html">Contact</a>
        </li>
      );
    }

    let fullName = null;

    if(this.state.contact != null) {
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
            {button}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
