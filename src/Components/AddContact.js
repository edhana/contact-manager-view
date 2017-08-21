import React, { Component } from 'react';
import {addNewContact} from './api.js'

class AddContact extends Component {
  handleSubmit(e) {
    console.log("teste");
    e.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <h3>Add Contact</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <lable>First Name</lable><br/>
            <input type="text" className="form-control" ref=''/>
          </div>
          <div className="form-group">
            <lable>Last Name</lable><br/>
            <input type="text" className="form-control" ref=''/>
          </div>
          <div className="form-group">
            <lable>Email</lable><br/>
            <input type="text" className="form-control" ref=''/>
          </div>
          <input type="submit" value="Submit" className="btn btn-default"/>
        </form>
      </div>
    );
  }
}

export default AddContact;
