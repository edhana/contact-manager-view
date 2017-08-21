import React, { Component } from 'react';
import {addNewContact} from './api.js'

class AddContact extends Component {
  handleSubmit(e) {
    e.preventDefault();

    //TODO: Add form validation
    let contact = {
      firstname: this.refs.firstname.value,
      lastname: this.refs.lastname.value,
      email: this.refs.email.value
    };

    addNewContact(contact);
  }

  render() {
    return (
      <div className="container">
        <h3>Add Contact</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <lable>First Name</lable><br/>
            <input type="text" className="form-control" ref='firstname'/>
          </div>
          <div className="form-group">
            <lable>Last Name</lable><br/>
            <input type="text" className="form-control" ref='lastname'/>
          </div>
          <div className="form-group">
            <lable>Email</lable><br/>
            <input type="text" className="form-control" ref='email'/>
          </div>
          <input type="submit" value="Submit" className="btn btn-primary"/>
        </form>
      </div>
    );
  }
}

export default AddContact;
