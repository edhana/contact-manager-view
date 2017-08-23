import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import { NavLink } from "react-router-dom";
import { fetchContactDataFromAPI } from './api.js';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contactToken: null,
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
    const cookies = new Cookies();
    let token = cookies.get('contactToken');
    this.setState({contactToken: token});
    this.updateContactLink(token);
  }

  updateContactLink(token) {
    if(token){
      fetchContactDataFromAPI(token).then(function (responseData) {
        if(responseData){
          this.setState({
            contact: responseData.data
          });
        }
      }.bind(this));
    }
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
              <NavLink className="nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink> 
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/price">Price</NavLink> 
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/addcontact">Contact</NavLink> 
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
