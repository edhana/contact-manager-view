import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  constructor (props) {
    super(props)

    this.state = {contact: null}
  }

  updateContactState (contactPromise) {
    if (contactPromise) {
      contactPromise.then((value) => {
        this.setState({contact: value.data})
      })
    }
  }

  componentWillMount () {
    this.updateContactState(this.props.contact)
  }

  componentWillReceiveProps () {
    this.updateContactState(this.props.contact)
  }

  render() {
    let fullName = null;

    if(this.state.contact) {
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
              <NavLink className="nav-link" to="/addcontact">Contact</NavLink> 
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
